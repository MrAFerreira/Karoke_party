const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    passwordHash: String,
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);

module.exports = User;
