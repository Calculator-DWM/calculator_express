const express = require("express");
const sequelize = require("./config/database");
const Routes = require("./routes/index.routes")

const app = express();

sequelize.sync().then(() => console.log("Database connected successfully"));

app.use(express.json());

app.use("/calculator", Routes)

app.listen(3000, () => {
  console.log("Server started on port 3000");
});