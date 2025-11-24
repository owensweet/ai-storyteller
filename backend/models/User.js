const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const ApiUsage = require('./ApiUsage');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    is_admin: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true // This automatically adds createdAt & updatedAt
});

// Instance method to verify password
userSchema.methods.verifyPassword = async function (plainPassword) {

    return await bcrypt.compare(plainPassword, this.password);
};

// Static method to find by email
userSchema.statics.findByEmail = async function (email) {
    return await this.findOne({ email });
};

// Static method to create user with hashed password
userSchema.statics.createUser = async function (email, password) {

    const hashedPassword = await bcrypt.hash(password, 10);

    return await this.create({

        email,
        password: hashedPassword
    });
};

// Instance method to increment API calls (facade function for ApiUsage model)
userSchema.methods.incrementApiCalls = async function () {

    await ApiUsage.incrementApiCallsForUser(this._id);

    return this;
};

// Instance method for getting the Api calls
userSchema.methods.getApiCalls = async function () {
    const usage = await ApiUsage.getOrCreate(this._id);
    return usage.api_calls;
};

// Static method to reset API calls
userSchema.statics.resetApiCalls = async function (userId) {

    await ApiUsage.resetApiCalls(userId);
    return await this.findById(userId);
};

// Static method to get all users
userSchema.statics.getAllUsers = async function () {
    const users = await this.find({}, 'email is_admin createdAt').sort({ createdAt: -1 }).lean();
    
    const usageRecords = await ApiUsage.find({}).lean();
    const usageMap = {};
    usageRecords.forEach(usage => {
        usageMap[usage.userId.toString()] = usage.api_calls;
    });
    
    // Attach api_calls to each user
    return users.map(user => ({
        ...user,
        api_calls: usageMap[user._id.toString()] || 0
    }));
};

// Static method to create default users
userSchema.statics.createDefaultUsers = async function () {
    try {
        // Create admin user
        const adminEmail = 'admin@admin.com';
        const adminExists = await this.findByEmail(adminEmail);

        if (!adminExists) {
            const hashedAdminPassword = await bcrypt.hash('111', 10);
            const admin = await this.create({
                email: adminEmail,
                password: hashedAdminPassword,
                is_admin: true
            });
            // Create ApiUsage record
            await ApiUsage.create({ userId: admin._id, api_calls: 0 });
            console.log('Admin user created successfully');
        }

        // Create test user
        const testEmail = 'john@john.com';
        const testExists = await this.findByEmail(testEmail);

        if (!testExists) {
            const hashedTestPassword = await bcrypt.hash('123', 10);
            const testUser = await this.create({
                email: testEmail,
                password: hashedTestPassword,
                is_admin: false
            });
            // Create ApiUsage record
            await ApiUsage.create({ userId: testUser._id, api_calls: 0 });
            console.log('Test user created successfully');
        }
    } catch (error) {
        console.error('Error creating default users:', error);
    }
};

// Static method to delete a user by ID
userSchema.statics.deleteUser = async function (userId) {
    await ApiUsage.deleteByUserId(userId);
    const deletedUser = await this.findByIdAndDelete(userId);
    return deletedUser; // returns the deleted document OR null if not found
};

const User = mongoose.model('User', userSchema);

module.exports = User;