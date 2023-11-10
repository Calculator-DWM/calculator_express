const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Operation extends Model {}

Operation.init(
  {
    num1: {
        type: DataTypes.NUMBER,
    },
    num2: {
        type: DataTypes.NUMBER,
    },
    operation: {
        type: DataTypes.STRING,
    },
    result: {
        type: DataTypes.NUMBER,
    },
  },
  {
    sequelize,
    modelName: "operation",
    timestamps: false,
  }
);

module.exports = Operation;
