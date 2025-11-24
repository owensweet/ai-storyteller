const express = require('express');
const { adminAuth } = require('../middleware/auth');
const User = require('../models/User');
const EndpointStats = require('../models/EndpointStats');

const router = express.Router();

/**
 * @swagger
 * /api/v1/admin/users:
 *   get:
 *     summary: Get all users (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       403:
 *         description: Access denied
 *       500:
 *         description: Server error
 */
// GET /api/admin/users - Get all users (admin only)
// GET /api/v1/admin/users - Get all users (admin only)
router.get('/users', adminAuth, async (req, res) => {
    try {
        const users = await User.getAllUsers();

        res.json({
            users: users.map(user => ({
                id: user._id,
                email: user.email,
                isAdmin: user.is_admin,
                apiCalls: user.api_calls || 0,
                createdAt: user.createdAt
            }))
        });

    } catch (error) {
        console.error('Get all users error:', error);
        res.status(500).json({ error: 'Failed to get users' });
    }
});
/**
 * @swagger
 * /api/v1/admin/users/{userId}/reset-api-calls:
 *   patch:
 *     summary: Reset user's API call count (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: API calls reset successfully
 *       404:
 *         description: User not found
 *       403:
 *         description: Access denied
 *       500:
 *         description: Server error
 */
// POST /api/admin/users/:userId/reset-api-calls - Reset user's API calls
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

/**
 * @swagger
 * /api/v1/admin/users/{userId}:
 *   delete:
 *     summary: Delete user (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       403:
 *         description: Access denied
 *       500:
 *         description: Server error
 */
// DELETE /api/admin/users/:userId
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

/**
 * @swagger
 * /api/v1/admin/stats:
 *   get:
 *     summary: Get system statistics (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: System statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 stats:
 *                   type: object
 *                   properties:
 *                     totalUsers:
 *                       type: integer
 *                     adminUsers:
 *                       type: integer
 *                     totalApiCalls:
 *                       type: integer
 *                     usersOverLimit:
 *                       type: integer
 *                     averageApiCalls:
 *                       type: string
 *       403:
 *         description: Access denied
 *       500:
 *         description: Server error
 */

// GET /api/v1/admin/stats - Get system statistics
router.get('/stats', adminAuth, async (req, res) => {
    try {
        const users = await User.getAllUsers();

        const totalApiCalls = users.reduce((sum, u) => sum + (u.api_calls || 0), 0);
        const usersOverLimit = users.filter(u => (u.api_calls || 0) > 20).length;
        const averageApiCalls = users.length > 0
            ? (totalApiCalls / users.length).toFixed(2)
            : '0';

        const stats = {
            totalUsers: users.length,
            adminUsers: users.filter(u => u.is_admin).length,
            totalApiCalls: totalApiCalls,
            usersOverLimit: usersOverLimit,
            averageApiCalls: averageApiCalls
        };

        res.json({ stats });

    } catch (error) {
        console.error('Get stats error:', error);
        res.status(500).json({ error: 'Failed to get statistics' });
    }
});

/**
 * @swagger
 * /api/v1/admin/endpoint-stats:
 *   get:
 *     summary: Get endpoint statistics (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Aggregated endpoint statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 endpointStats:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       method:
 *                         type: string
 *                         example: GET
 *                       endpoint:
 *                         type: string
 *                         example: /api/v1/users/profile
 *                       requests:
 *                         type: integer
 *                         example: 145
 *       403:
 *         description: Access denied
 *       500:
 *         description: Server error
 */
// GET /api/v1/admin/endpoint-stats - Get endpoint statistics
router.get('/endpoint-stats', adminAuth, async (req, res) => {
    try {
        const endpointStats = await EndpointStats.getAggregatedStats();

        res.json({ endpointStats });

    } catch (error) {

        console.error('Get endpoint stats error:', error);

        res.status(500).json({ error: 'Failed to get endpoint statistics' });
    }
});

module.exports = router;