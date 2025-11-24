const express = require('express');
const { auth } = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * /api/v1/users/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */

// GET /api/v1/users/profile - Get user profile
router.get('/profile', auth, async (req, res) => {

    try {
        // Debug code: Log profile request
        console.log('[DEBUG] Profile endpoint reached');
        console.log('[DEBUG] User from auth middleware:', req.user ? req.user.email : 'No user');

        const user = req.user;

        console.log('[DEBUG] Sending profile response for user:', user.email);

        res.json({
            user: {
                id: user.id,
                email: user.email,
                apiCalls: user.getApiCalls(),
                remainingCalls: Math.max(0, 20 - user.getApiCalls()),
                isAdmin: user.is_admin
            }
        });
    } catch (error) {
        // Debug code: Log profile errors
        console.error('[DEBUG] Profile endpoint error:', error);
        console.log('[DEBUG] Error details:', {
            name: error.name,
            message: error.message,
            user: req.user ? req.user.email : 'No user'
        });

        console.error('Get profile error:', error);
        res.status(500).json({ error: 'Failed to get user profile' });
    }
});

module.exports = router;