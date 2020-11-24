const db = require("../models");

const index = (req, res) => {
  db.Vendor.find({})
  .then((foundVendors) => {
    res.json({vendors: foundVendors });
  });

  console.log('underneath database query');

};

const show = (req, res) => {
  db.Vendors.findById(req.params.id)
    .then((foundVendor) => {
      res.json({vendor: foundVendor });
    })
    .catch((err) => {
      console.log('Error in vendors.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};

module.exports = {
  index,
  show,
};