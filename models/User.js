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
  Online: {
    type: Boolean,
    default: false,
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


  friends: {
    type: [
      {
        firstname: String,
        lastname: String,
        avatar: String,
        user: String,
        myuser: String,
        chatid: String,
        isOnline: Boolean,
      },
    ],
    default: [
      {
        firstname: '',
        lastname: '',
        avatar: '',
        user: '',
        myuser: '',
        chatid: '',
        isOnline: false,
      },
    ],
  },
  friendRequests: {
    type: [
      {
        firstname: String,
        lastname: String,
        avatar: String,
        user: String,
        myuser: String,
      },
    ],
    default: [
      { firstname: '', lastname: '', avatar: '', user: '', myuser: '' },
    ],
  },
  sentRequests: {
    type: [
      {
        firstname: String,
        lastname: String,
        avatar: String,
        user: String,
        myuser: String,
      },
    ],
    default: [
      { firstname: '', lastname: '', avatar: '', user: '', myuser: '' },
    ],
  },
  chat: {
    type: [
      {
        chatid: String,
        myid: String,
        userid: String,
        messages: [
          { sender: String, text: String, avatar: String, myid: String },
        ],
      },
    ],
    default: [
      {
        chatid: '',
        myid: '',
        userid: '',
        messages: [
          {
            sender: 'Admin',
            text: 'You can now send a message',
            avatar: '',
            myid: '',
          },
        ],
      },
    ],
  },
});

module.exports = User = mongoose.model('user', UserSchema);
