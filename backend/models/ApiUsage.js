const mongoose = require('mongoose');

const apiUsageSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },

    api_calls: {
        type: Number,
        default: 0
    },

    lastResetDate: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true
});

// Static method to find by userId
apiUsageSchema.statics.findByUserId = async function (userId) {
    return await this.findOne({ userId });
};

// Static method to get or create usage record
apiUsageSchema.statics.getOrCreate = async function (userId) {
    let usage = await this.findByUserId(userId);
    
    if (!usage) {
        usage = await this.create({ userId, api_calls: 0 });
    }
    
    return usage;
};

// Static method to increment API calls for a user
apiUsageSchema.statics.incrementApiCallsForUser = async function (userId) {
    const usage = await this.findOneAndUpdate(
        { userId },
        { $inc: { api_calls: 1 } },
        { new: true, upsert: true }
    );
    return usage;
};

// Static method to reset API calls
apiUsageSchema.statics.resetApiCalls = async function (userId) {
    return await this.findOneAndUpdate(
        { userId },
        { api_calls: 0, lastResetDate: Date.now() },
        { new: true, upsert: true }
    );
};

// Static method to delete usage record
apiUsageSchema.statics.deleteByUserId = async function (userId) {
    const deleted = await this.findOneAndDelete({ userId });
    return deleted;
};

const ApiUsage = mongoose.model('ApiUsage', apiUsageSchema);

module.exports = ApiUsage;