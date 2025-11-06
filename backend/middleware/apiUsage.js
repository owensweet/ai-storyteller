const User = require('../models/User');

const apiUsage = async (req, res, next) => {
    
    try {

        const user = req.user;

        if (!user) {

            return res.status(401).json({ error: 'User not authenticated' });
        }

        // Check if user has exceeded free API calls (20 calls)
        if (user.api_calls >= 20) {

            // Still allow the request but include warning in response
            req.apiLimitExceeded = true;
        }

        // Increment API call count
        await user.incrementApiCalls();

        next();

    } catch (error) {

        console.error('API usage middleware error:', error);
        
        res.status(500).json({ error: 'Failed to track API usage' });
    }
};

module.exports = apiUsage;