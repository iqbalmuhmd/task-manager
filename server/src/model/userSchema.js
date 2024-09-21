const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String
});

module.exports = mongoose.model('User', UserSchema);
