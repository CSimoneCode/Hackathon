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
  User: require('./User'),
  Drink: require('./Drink'),
  Event: require('./Event'),
  Vendor: require('./Vendor')
};
