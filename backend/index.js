const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

require('dotenv').config();

const authRoutes = require('./routes/auth');
const llmRoutes = require('./routes/llm');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const connectDB = require('./models/database');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// Trust proxy for railway X-Forwarded-For header
app.set('trust proxy', 1)

// Rate limiting
const limiter = rateLimit({

    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// CORS configuration
app.use(cors({

    origin: [
        'http://localhost:3000',                    // Local development
        'https://ai-storyteller-two.vercel.app',   // Production frontend
        process.env.FRONTEND_URL                   // Environment variable
    ].filter(Boolean),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/llm', llmRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Debug endpoint to check cookies
app.get('/debug/cookies', (req, res) => {
    // Debug code: Comprehensive request analysis
    console.log('[DEBUG] Debug endpoint called');
    console.log('[DEBUG] Full request analysis:', {
        method: req.method,
        url: req.url,
        origin: req.headers.origin,
        userAgent: req.headers['user-agent']
    });

    res.json({
        cookies: req.cookies,
        headers: {
            cookie: req.headers.cookie,
            authorization: req.headers.authorization,
            origin: req.headers.origin,
            referer: req.headers.referer
        },
        environment: {
            nodeEnv: process.env.NODE_ENV,
            frontendUrl: process.env.FRONTEND_URL,
            jwtSecret: process.env.JWT_SECRET ? 'Set' : 'Not set'
        },
        timestamp: new Date().toISOString()
    });
});

// Test authentication endpoint with debug output
app.get('/debug/auth-test', async (req, res) => {
    const jwt = require('jsonwebtoken');

    let debugInfo = {
        timestamp: new Date().toISOString(),
        cookies: req.cookies,
        headers: {
            authorization: req.headers.authorization,
            cookie: req.headers.cookie,
            origin: req.headers.origin,
            referer: req.headers.referer
        },
        authFlow: []
    };

    try {
        // Simulate auth middleware logic
        debugInfo.authFlow.push('1. Starting auth check...');

        let token = req.cookies.token;
        debugInfo.authFlow.push(`2. Cookie token: ${token ? 'Found' : 'Not found'}`);

        if (!token && req.headers.authorization) {
            if (req.headers.authorization.startsWith('Bearer ')) {
                token = req.headers.authorization.slice(7);
                debugInfo.authFlow.push('3. Using Bearer token from Authorization header');
            }
        }

        if (!token) {
            debugInfo.authFlow.push('4. No token found - would return 401');
            debugInfo.result = 'FAIL - No token';
            return res.json(debugInfo);
        }

        debugInfo.authFlow.push(`4. Token found: ${token.substring(0, 20)}...`);

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        debugInfo.authFlow.push(`5. Token decoded - User ID: ${decoded.id}`);

        // Find user
        const User = require('./models/User');
        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            debugInfo.authFlow.push('6. User not found in database');
            debugInfo.result = 'FAIL - User not found';
            return res.json(debugInfo);
        }

        debugInfo.authFlow.push(`6. User found: ${user.email}`);
        debugInfo.result = 'SUCCESS';
        debugInfo.user = {
            id: user._id,
            email: user.email
        };

        res.json(debugInfo);

    } catch (error) {
        debugInfo.authFlow.push(`ERROR: ${error.message}`);
        debugInfo.result = 'FAIL - Token error';
        debugInfo.error = error.message;
        res.json(debugInfo);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, async () => {

    try {
        console.log(`Server running on port ${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);

        // Connect to MongoDB
        console.log('Connecting to MongoDB...');

        await connectDB();

        // Create default users
        console.log('Creating default users...');

        await User.createDefaultUsers();

        console.log('Database initialization complete');
    } catch (error) {
        console.error('Error during server startup:', error);
    }
});

module.exports = app;