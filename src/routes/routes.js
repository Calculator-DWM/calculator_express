const express = require("express");
const operationController = require("../controllers/operationController");
const Router = express.Router();

Router.route("/calc").post(operationController.calculate);

module.exports = Router;
