const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {type: String, required: true},
  link: String,
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  description: {type: String, required: true},
  date: String,
  time: String,
  ageRestriction: {type: Boolean, required: true},
}, {timestamps: true});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
