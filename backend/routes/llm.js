const express = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const { auth } = require('../middleware/auth');
const apiUsage = require('../middleware/apiUsage');

const router = express.Router();

// LLM-specific rate limiting
const llmLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10, // limit each IP to 10 LLM requests per minute
    message: { error: 'Too many LLM requests, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});

// Input validation middleware
const validateLLMRequest = [
    body('messages').isArray().withMessage('Messages must be an array'),
    body('messages').isLength({ min: 1 }).withMessage('At least one message is required'),
    body('model').optional().isString().withMessage('Model must be a string'),
    body('temperature').optional().isFloat({ min: 0, max: 2 }).withMessage('Temperature must be between 0 and 2'),
    body('max_tokens').optional().isInt({ min: 1, max: 4096 }).withMessage('Max tokens must be between 1 and 4096'),
];

function handleValidationErrors(req, res, next) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({

            error: 'Validation failed',
            details: errors.array()
        });
    }
    next();
}

// POST /api/llm - Main LLM endpoint
router.post('/',
    llmLimiter,
    validateLLMRequest,
    handleValidationErrors,
    auth,
    apiUsage,
    async (req, res) => {
        const LLM_BASE = process.env.LLM_BASE_URL;

        if (!LLM_BASE) {
            return res.status(500).json({ error: 'LLM_BASE_URL is not configured' });
        }

        // Always force streaming at the model layer
        const payload = {
            model: req.body.model || "mistral",
            messages: req.body.messages || [],
            temperature: req.body.temperature || 0.7,
            max_tokens: req.body.max_tokens || 256,
            stream: true, // key for SSE streaming from llama.cpp
        };

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 60000); // hard timeout 60s

        let upstream;
        try {
            const response = await fetch(`${LLM_BASE}/v1/chat/completions`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                signal: controller.signal,
            });

            upstream = response;
        } catch (error) {
            clearTimeout(timeout);
            const message = error?.name === "AbortError" ? "Upstream timeout" : error?.message || "Upstream fetch failed";
            return res.status(502).json({ error: message });
        } finally {
            clearTimeout(timeout);
        }

        if (!upstream.ok || !upstream.body) {
            let text = '';
            try {
                text = await upstream.text();
            } catch (e) {
                // ignore
            }

            return res.status(502).json({
                error: `Upstream ${upstream.status} ${upstream.statusText}`,
                details: text.slice(0, 2000),
            });
        }

        // Set SSE headers
        res.writeHead(200, {
            'Content-Type': 'text/event-stream; charset=utf-8',
            'Cache-Control': 'no-cache, no-transform',
            'Connection': 'keep-alive',
            'X-Accel-Buffering': 'no',
        });

        // Handle streaming response
        const reader = upstream.body.getReader();

        const pump = async () => {
            
            try {

                while (true) {

                    const { done, value } = await reader.read();

                    if (done) {
                        res.end();
                        break;
                    }

                    res.write(value);
                }
            } catch (error) {
                console.error('Stream error:', error);
                res.end();
            }
        };

        pump();

        // Handle client disconnect
        req.on('close', () => {
            
            if (!res.headersSent) {
                res.end();
            }
        });
    }
);

// OPTIONS for CORS preflight
router.options('/', (req, res) => {
    res.status(204).json();
});

module.exports = router;