const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {type: String, required: true},
  members: {type: Number, required: true},
  description: {type: String, required: true},
  age: {type: Boolean, required: true},
}, {timestamps: true});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;