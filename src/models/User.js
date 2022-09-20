import mongoose from "mongoose";
import bcrypt from "bcrypt";

//Instancioaum novo schema
const UserSchema = mongoose.Schema({
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

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hash(this.password, 10);
  next();
});

//Define o Schema
//nome model/ de onde vem a model
const User = mongoose.model("User", UserSchema);

export default User;
