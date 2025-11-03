const express = require('express');
const { auth } = require('../middleware/auth');

const router = express.Router();

// GET /api/users/profile - Get user profile
router.get('/profile', auth, async (req, res) => {

    try {
        
        const user = req.user;

        res.json({
            user: {
                id: user.id,
                email: user.email,
                apiCalls: user.apiCalls,
                remainingCalls: Math.max(0, 20 - user.apiCalls),
                isAdmin: user.is_admin
            }
        });
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ error: 'Failed to get user profile' });
    }
});

module.exports = router;