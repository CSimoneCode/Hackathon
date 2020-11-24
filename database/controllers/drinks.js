const db = require("../models");

const index = (req, res) => {
  db.Drink.find({})
  .then((foundDrinks) => {
    res.json({drinkss: foundDrinks });
  });

  console.log('underneath database query');

};

const show = (req, res) => {
  db.Drink.findById(req.params.id)
    .then((foundDrinks) => {
      res.json({drinks: foundDrinks });
    })
    .catch((err) => {
      console.log('Error in drinks.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};

module.exports = {
  index,
  show,
};
