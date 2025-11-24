const express = require('express');
const { adminAuth } = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// GET /api/v1/admin/users - Get all users (admin only)
router.get('/users', adminAuth, async (req, res) => {

    try {

        const users = await User.getAllUsers();

        res.json({

            users: users.map(user => ({

                id: user.id,
                email: user.email,
                isAdmin: user.is_admin,
                apiCalls: user.api_calls,
                createdAt: user.created_at
            }))
        });

    } catch (error) {
        console.error('Get all users error:', error);
        res.status(500).json({ error: 'Failed to get users' });
    }
});

// POST /api/v1/admin/users/:userId/reset-api-calls - Reset user's API calls
router.patch('/users/:userId/reset-api-calls', adminAuth, async (req, res) => {

    try {
        
        const { userId } = req.params;

        const result = await User.resetApiCalls(userId);

        if (result === 0) {

            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'API calls reset successfully' });
    } catch (error) {

        console.error('Reset API calls error:', error);

        res.status(500).json({ error: 'Failed to reset API calls' });
    }
});

// DELETE /api/v1/admin/users/:userId
router.delete('/users/:userId', adminAuth, async (req, res) => {
    try {
        const { userId } = req.params;

        const deletedUser = await User.deleteUser(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });

    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

// GET /api/v1/admin/stats - Get system statistics
router.get('/stats', adminAuth, async (req, res) => {
    try {
        const users = await User.getAllUsers();

        const stats = {

            totalUsers: users.length,
            adminUsers: users.filter(u => u.is_admin).length,
            totalApiCalls: users.reduce((sum, u) => sum + u.api_calls, 0),
            usersOverLimit: users.filter(u => u.api_calls > 20).length,
            averageApiCalls: users.length > 0 ? (users.reduce((sum, u) => sum + u.api_calls, 0) / users.length).toFixed(2) : 0
        };

        res.json({ stats });

    } catch (error) {
        
        console.error('Get stats error:', error);

        res.status(500).json({ error: 'Failed to get statistics' });
    }
});

module.exports = router;