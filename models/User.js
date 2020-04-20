const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  typeuser: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  birthday: {
    type: Date,
    default: Date.now,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  friends: {
    type: [
      { firstname: String, lastname: String, avatar: String, user: String },
    ],
    default: [],
  },
  friendRequests: {
    type: [
      { firstname: String, lastname: String, avatar: String, user: String },
    ],
    default: [],
  },
  sentRequests: {
    type: [
      { firstname: String, lastname: String, avatar: String, user: String },
    ],
    default: [],
  },
});

module.exports = User = mongoose.model('user', UserSchema);
