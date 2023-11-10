const express = require("express");
const sequelize = require("./config/database");
const bodyParser = require("body-parser");
const morganBody = require("morgan-body");
const Routes = require("./routes/routes");
const fs = require("fs");
const path = require("path");

const app = express();

sequelize.sync().then(() => console.log("Database connected successfully"));

app.use(bodyParser.json());

const log = fs.createWriteStream(
  path.join(__dirname, "./logs", "express.log"),
  { flags: "a" }
);

morganBody(app, {
  noColors: true,
  stream: log,
});

app.use("/calculator", Routes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
