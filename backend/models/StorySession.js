const mongoose = require('mongoose');

const storySessionSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    story_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story',
        required: true
    },

    session_data: {
        type: mongoose.Schema.Types.Mixed, // Can store any JSON data
        default: {}
    }

}, {
    timestamps: true
});

const StorySession = mongoose.model('StorySession', storySessionSchema);

module.exports = StorySession;