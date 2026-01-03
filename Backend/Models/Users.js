const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, default: null },
    authProvider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local'
    }, googleId: {
        type: String,
        default: null
    },
    profileImageUrl: { type: String, default: null },
    workImageUrl: { type: [String], default: null },
    bio: { type: String, default: '' },
    skillsKnow: { type: [String], default: [] },
    skillsWantToKnow: { type: [String], default: [] },
    socialLink: { type: String, default: '' },
    languages: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    pendingRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true }
);

const User = mongoose.model('User', Schema);

module.exports = User;