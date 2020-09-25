const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoursSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  title:{
    type: String,
  },
  text: {
    type: String,
    required: true,
  },

  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      text: {
        type: String,
        required: true,
      },
      firstname: {
        type: String,
      },
      lastname: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Cours = mongoose.model('Cours', CoursSchema);
