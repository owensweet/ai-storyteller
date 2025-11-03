const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {

    try {

        // Get token from header or cookie
        let token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            token = req.cookies.token;
        }

        console.log('Token received:', token);

        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get user from database
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ error: 'Token is not valid' });
        }

        req.user = user;

        next();

    } catch (error) {

        console.error('Auth middleware error:', error);

        res.status(401).json({ error: 'Token is not valid' });
    }
};

// Admin only middleware
const adminAuth = async (req, res, next) => {

    try {

        await auth(req, res, () => {

            if (!req.user.isAdmin) {

                return res.status(403).json({ error: 'Access denied. Admin only.' });
            }
            next();
        });

    } catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
    }
};

module.exports = { auth, adminAuth };