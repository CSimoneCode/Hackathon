const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}, 
  name: {type: String, required: true},
  drinkingAge: {type: Boolean, required: true},
  homeAddress: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: Number, required: true},
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;