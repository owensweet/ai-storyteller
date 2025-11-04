const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

    isAdmin: {
        type: Boolean,
        default: false
    },

    api_calls: {
        type: Number,
        default: 0
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

// Instance method to increment API calls
userSchema.methods.incrementApiCalls = async function () {

    this.api_calls += 1;

    await this.save();

    return this;
};

// Static method to reset API calls
userSchema.statics.resetApiCalls = async function (userId) {

    return await this.findByIdAndUpdate(

        userId,
        { api_calls: 0 },
        { new: true }
    );
};

// Static method to get all users
userSchema.statics.getAllUsers = async function () {
    return await this.find({}, 'email isAdmin api_calls createdAt').sort({ createdAt: -1 });
};

// Static method to create default users
userSchema.statics.createDefaultUsers = async function () {

    try {

        // Create admin user
        const adminEmail = 'admin@admin.com';
        const adminExists = await this.findByEmail(adminEmail);

        if (!adminExists) {

            const hashedAdminPassword = await bcrypt.hash('111', 10);

            await this.create({
                email: adminEmail,
                password: hashedAdminPassword,
                isAdmin: true
            });
            console.log('Admin user created successfully');
        }

        // Create test user
        const testEmail = 'john@john.com';
        const testExists = await this.findByEmail(testEmail);

        if (!testExists) {

            const hashedTestPassword = await bcrypt.hash('123', 10);

            await this.create({

                email: testEmail,
                password: hashedTestPassword,
                isAdmin: false
            });
            console.log('Test user created successfully');
        }
    } catch (error) {
        console.error('Error creating default users:', error);
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;