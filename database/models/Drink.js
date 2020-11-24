const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  name: {type: String, required: true},
  image: String,
  ingredients: {type: String, required: true},
  price: {type: Number, required: true},
  alcoholic: {type: Boolean, required: true},
}, {timestamps: true});

const Drink = mongoose.model("Drink", DrinkSchema);

module.exports = Drink;
