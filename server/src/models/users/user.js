const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    // required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
