const mongoose = require('mongoose');

// MongoDB connection
const connectDB = async () => {

    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ai_storyteller');

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {

        console.error('MongoDB connection error:', error);
        console.log('Falling back to local MongoDB. Make sure MongoDB is running locally or update MONGODB_URI in .env');
    }
};

module.exports = connectDB;