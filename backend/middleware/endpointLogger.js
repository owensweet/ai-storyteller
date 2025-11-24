const EndpointStats = require('../models/EndpointStats');

const endpointLogger = async (req, res, next) => {
    // Store the original res.json and res.status to capture status code
    const originalJson = res.json.bind(res);
    const originalStatus = res.status.bind(res);

    let statusCode = 200;

    // Override res.status to capture status code
    res.status = function (code) {
        statusCode = code;
        return originalStatus(code);
    };

    // Override res.json to log after response is sent
    res.json = function (data) {
        // Log the endpoint call asynchronously (don't block response)
        const method = req.method;
        const endpoint = req.originalUrl || req.url;
        const userId = req.user ? req.user._id : null;

        // Only log /api/v1/* endpoints
        if (endpoint.startsWith('/api/v1/')) {
            EndpointStats.logEndpoint(method, endpoint, userId, statusCode).catch(err => {
                console.error('Failed to log endpoint stats:', err);
            });
        }

        return originalJson(data);
    };

    next();
};

module.exports = endpointLogger;
