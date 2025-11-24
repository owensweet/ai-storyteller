const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'AI Storyteller API',
            version: '1.0.0',
            description: 'API documentation for AI Storyteller application - Generate captivating stories with AI',
            contact: {
                name: 'API Support',
                email: 'support@ai-storyteller.com'
            }
        },
        servers: [
            {
                url: 'https://ai-storyteller-production.up.railway.app',
                description: 'Production server'
            },
            {
                url: 'http://localhost:3001',
                description: 'Development server'
            }
        ],
        tags: [
            {
                name: 'Authentication',
                description: 'User authentication endpoints'
            },
            {
                name: 'Users',
                description: 'User profile endpoints'
            },
            {
                name: 'Admin',
                description: 'Admin-only endpoints for user management'
            },
            {
                name: 'LLM',
                description: 'AI story generation endpoints'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                },
                cookieAuth: {
                    type: 'apiKey',
                    in: 'cookie',
                    name: 'token'
                }
            },
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'User ID'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email address'
                        },
                        isAdmin: {
                            type: 'boolean',
                            description: 'Admin status'
                        },
                        apiCalls: {
                            type: 'integer',
                            description: 'Number of API calls made'
                        }
                    }
                },
                Error: {
                    type: 'object',
                    properties: {
                        error: {
                            type: 'string',
                            description: 'Error message'
                        }
                    }
                }
            }
        },
        security: [
            {
                bearerAuth: []
            },
            {
                cookieAuth: []
            }
        ]
    },
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
