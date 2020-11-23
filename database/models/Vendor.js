const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  name: {type: String, required: true},
  description: String,
  drinks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drink'
  }]
}, {timestamps: true});

const Vendor = mongoose.model("Vendor", VendorSchema);

module.exports = Vendor;