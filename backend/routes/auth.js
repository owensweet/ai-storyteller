const express = require('express');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

const router = express.Router();

// Input validation rules
const registerValidation = [
    body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
];

const loginValidation = [
    body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
];

// Helper function to generate JWT token
const generateToken = (userId) => {

    return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'your-secret-key', {

        expiresIn: '24h',
    });
};

// POST /api/auth/register
router.post('/register', registerValidation, async (req, res) => {

    try {

        // Check for validation errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json({

                error: 'Validation failed',
                details: errors.array()
            });
        }

        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email' });
        }

        // Create new user
        const user = await User.create(email, password);

        // Generate token
        const token = generateToken(user.id);

        // Set httpOnly cookie
        res.cookie('token', token, {

            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        });

        res.status(201).json({

            message: 'User registered successfully',
            user: {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
                apiCalls: user.apiCalls
            }
        });
    } catch (error) {

        console.error('Registration error:', error);

        res.status(500).json({ error: 'Failed to register user' });
    }
});

// POST /api/auth/login
router.post('/login', loginValidation, async (req, res) => {

    try {

        // Check for validation errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json({

                error: 'Validation failed',
                details: errors.array()
            });
        }

        const { email, password } = req.body;

        // Find user
        const user = await User.findByEmail(email);

        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Verify password
        const isValidPassword = await user.verifyPassword(password, user.password);

        if (!isValidPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate token
        const token = generateToken(user.id);

        // Debug code: Log token generation
        console.log('[DEBUG] Login successful for user:', user.email);
        console.log('[DEBUG] Generated token length:', token.length);
        console.log('[DEBUG] JWT_SECRET available:', process.env.JWT_SECRET ? 'Yes' : 'No');
        console.log('[DEBUG] Setting cookie with options:', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000
        });

        // Set httpOnly cookie
        res.cookie('token', token, {

            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        });

        console.log('[DEBUG] Cookie set, sending response with token');

        res.json({
            token: token,
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
                apiCalls: user.apiCalls
            }
        });
    } catch (error) {

        console.error('Login error:', error);

        res.status(500).json({ error: 'Failed to login' });
    }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logout successful' });
});

// GET /api/auth/me - Get current user info
router.get('/me', async (req, res) => {
    try {
        // Get token from header or cookie
        let token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            token = req.cookies.token;
        }

        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

        // Get user from database
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        res.json({

            user: {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
                apiCalls: user.apiCalls
            }
        });
    } catch (error) {

        console.error('Get user error:', error);

        res.status(401).json({ error: 'Invalid token' });
    }
});

module.exports = router;