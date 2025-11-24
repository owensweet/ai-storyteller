const mongoose = require('mongoose');

const endpointStatsSchema = new mongoose.Schema({

    method: {
        type: String,
        required: true,
        enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    },

    endpoint: {
        type: String,
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },

    statusCode: {
        type: Number,
        default: 200
    },

    timestamp: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true,
    collection: 'endpoint_stats'
});

// Static method to log an endpoint call
endpointStatsSchema.statics.logEndpoint = async function (method, endpoint, userId = null, statusCode = 200) {
    return await this.create({
        method,
        endpoint,
        userId,
        statusCode,
        timestamp: new Date()
    });
};

// Static method to get aggregated stats
endpointStatsSchema.statics.getAggregatedStats = async function () {
    return await this.aggregate([
        {
            $group: {
                _id: { method: '$method', endpoint: '$endpoint' },
                requests: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                method: '$_id.method',
                endpoint: '$_id.endpoint',
                requests: 1
            }
        },
        {
            $sort: { endpoint: 1, method: 1 }
        }
    ]);
};

const EndpointStats = mongoose.model('EndpointStats', endpointStatsSchema);

module.exports = EndpointStats;
