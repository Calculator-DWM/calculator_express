const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Operation extends Model {}

Operation.init(
  {
    num1: {
        type: DataTypes.DECIMAL,
    },
    num2: {
        type: DataTypes.DECIMAL,
    },
    operation: {
        type: DataTypes.STRING,
    },
    result: {
        type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize,
    modelName: "operation",
    timestamps: true,
  }
);

module.exports = Operation;
