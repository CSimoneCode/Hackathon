const mongoose = require('mongoose');

const User = require('./models/User');
const userArr = require('./userData.json');

const Vendor = require('./models/Vendor');
const vendorArr = require('./vendorData.json');

const Drink = require('./models/Drink');
const drinkArr = require('./drinkData.json');

const Event = require('./models/Event');
const eventArr = require('./eventData.json'); 


// User.collection.insertMany(userArr, (err, userArr) => {
//   if (err){
//     console.log(`error adding users: ${err}`);
//   } else {
//     console.log(userArr);
//   }
//   process.exit();
// }); 

Vendor.collection.insertMany(vendorArr, (err, vendorArr) => {
  if (err){
    console.log(`error adding vendors: ${err}`);
  } else {
    console.log(vendorArr);
  }
  process.exit()
});
    