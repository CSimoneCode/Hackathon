const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const port = process.env.PORT || 4000;
const app = express();

const corsOptions = {
  origin : 'https://localhost:3000/'
}
// middleware - JSON parsing
app.use(express.json());

// middle 
app.use("/bevbuddies/users", routes.users);
app.use("/bevbuddies/events", routes.events);
app.use("/bevbuddies/vendors", routes.vendors);
app.use("/bevbuddies/drinks", routes.drinks);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));


// Listener
app.listen(port, () => console.log(`Server running on port ${port}`));