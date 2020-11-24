// Run these in the terminal after installing mongodb, mongoose, and express 
// Uncomment one model command at at time and commit after each model is added to the db in case you run into any snags
// for example, uncomment the section beginning with User, save this file, then run "node populateApp.js" in the terminal

const mongoose = require('mongoose');

const connectionString =
process.env.MONGODB_URI || "mongodb://localhost:27017/drinks_with_friends";

const configOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
.connect(connectionString, configOptions)
.then(() => console.log("MongoDB Successfully connected"))
.catch((err) => console.log(`MonngoDB connection err: ${err}`))


module.exports = {
  User: require('./models/User'),
  Drink: require('./models/Drink'),
  Event: require('./models/Event'),
  Vendor: require('./models/Vendor')
};

const User = require('./models/User');
const userArr = require('./userData');

const Vendor = require('./models/Vendor');
const vendorArr = require('./vendorData');

const Drink = require('./models/Drink');
const drinkArr = require('./drinkData');

const Event = require('./models/Event');
const eventArr = require('./eventData'); 


// User.collection.insertMany(userArr, (err, userArr) => {
//   if (err){
//     console.log(`error adding users: ${err}`);
//   } else {
//     console.log(userArr);
//   }
//   // process.exit();
// }); 

// Vendor.collection.insertMany(vendorArr, (err, vendorArr) => {
//   if (err){
//     console.log(`error adding vendors: ${err}`);
//   } else {
//     console.log(vendorArr);
//   }
// //   process.exit()
// });

// Drink.collection.insertMany(drinkArr, (err, drinkArr) => {
//   if (err){
//     console.log(`error adding vendors: ${err}`);
//   } else {
//     console.log(drinkArr);
//   }
// //   process.exit()
// });

// Event.collection.insertMany(eventArr, (err, eventArr) => {
//   if (err){
//     console.log(`error adding vendors: ${err}`);
//   } else {
//     console.log(eventArr);
//   }
// //   process.exit()
// });   
  