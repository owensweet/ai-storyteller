const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    title: {
        type: String,
        trim: true
    },

    content: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        trim: true
    },

    setting: {
        type: String,
        trim: true
    },

    status: {
        type: String,
        default: 'active',
        enum: ['active', 'archived', 'deleted']
    }

}, {
    timestamps: true
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;