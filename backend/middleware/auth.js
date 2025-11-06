const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {

    try {
        // Debug code: Log authentication attempt
        console.log('[DEBUG] Auth middleware triggered for:', req.method, req.path);
        console.log('[DEBUG] Request headers:', {
            authorization: req.headers.authorization,
            cookie: req.headers.cookie,
            origin: req.headers.origin
        });
        console.log('[DEBUG] Parsed cookies:', req.cookies);

        // Get token from header or cookie
        let token = req.header('Authorization')?.replace('Bearer ', '');
        console.log('[DEBUG] Token from Authorization header:', token ? 'Found' : 'Not found');

        // Check if token is 'undefined' string (common issue)
        if (token === 'undefined' || token === 'null' || !token) {
            token = null;
            console.log('[DEBUG] Authorization header token was invalid, trying cookie...');
        }

        if (!token) {
            token = req.cookies.token;
            console.log('[DEBUG] Token from cookie:', token ? 'Found' : 'Not found');
        }

        console.log('Token received:', token);

        if (!token) {
            console.log('[DEBUG] No token found in either header or cookie');
            return res.status(401).json({ error: 'No token, authorization denied' });
        }

        console.log('[DEBUG] Using JWT_SECRET:', process.env.JWT_SECRET ? 'Set' : 'Not set');

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('[DEBUG] Token decoded successfully, user ID:', decoded.id);

        // Get user from database
        const user = await User.findById(decoded.id);
        console.log('[DEBUG] User lookup result:', user ? `Found user: ${user.email}` : 'User not found');

        if (!user) {
            console.log('[DEBUG] User not found in database for ID:', decoded.id);
            return res.status(401).json({ error: 'Token is not valid' });
        }

        req.user = user;
        console.log('[DEBUG] Authentication successful for user:', user.email);

        next();

    } catch (error) {
        // Debug code: Log authentication errors
        console.error('[DEBUG] Auth middleware error:', error);
        console.log('[DEBUG] Error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack?.split('\n')[0]
        });

        console.error('Auth middleware error:', error);

        res.status(401).json({ error: 'Token is not valid' });
    }
};

// Admin only middleware
const adminAuth = async (req, res, next) => {

    try {

        await auth(req, res, () => {

            if (!req.user.is_admin) {

                return res.status(403).json({ error: 'Access denied. Admin only.' });
            }
            next();
        });

    } catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
    }
};

module.exports = { auth, adminAuth };