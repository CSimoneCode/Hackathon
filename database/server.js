const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const port = process.env.PORT || 4000;
const app = express();

const corsOptions = {
  origin : 'https://localhost:3000/'
}

app.use(cors(corsOptions));


app.listen(port, () => console.log(`Server running on port ${port}`));