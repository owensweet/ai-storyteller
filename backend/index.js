const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

require('dotenv').config();

const authRoutes = require('./routes/auth');
const llmRoutes = require('./routes/llm');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const connectDB = require('./models/database');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// Trust proxy for railway X-Forwarded-For header
app.set('trust proxy', 1)

// Rate limiting
const limiter = rateLimit({

    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// CORS configuration
app.use(cors({

    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/llm', llmRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, async () => {

    try {
        console.log(`Server running on port ${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);

        // Connect to MongoDB
        console.log('Connecting to MongoDB...');
        
        await connectDB();

        // Create default users
        console.log('Creating default users...');

        await User.createDefaultUsers();

        console.log('Database initialization complete');
    } catch (error) {
        console.error('Error during server startup:', error);
    }
});

module.exports = app;