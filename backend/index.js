const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const filter = require("content-filter");
const favicon = require("serve-favicon");
app.use(cors());
app.options("*", cors());
const { models, connectDb } = require("./models");

require("dotenv").config();
let source = process.env.REACT_APP_ATLAS_CONNECTION;

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, "public", "favicon.png")));

mongoose.connect(source, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

module.exports = { connectDb, models };

//connect to the database
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected.");
});
const PORT = process.env.REACT_APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Successfully served on port: ${PORT}.`);
});

//Import routes
let apiRoutes = require("./routes");
//Use API routes in the App
app.use(BASE_URL, apiRoutes);
app.use(express.static(path.join(__dirname, "../frontend", "dist")));

//filter input to prevent code injection for mongodb
var blackList = ["$", "{", "&&", "||"];
var options = {
  urlBlackList: blackList,
  bodyBlackList: blackList,
};
app.use(filter(options));
