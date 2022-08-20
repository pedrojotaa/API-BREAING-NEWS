const mongoose = require("mongoose");

//Instancioaum novo schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
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
  avatar: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

//Define o Schema
//nome model/ de onde vem a model
const User = mongoose.model("User", userSchema);

module.exports = User;
