const Operation = require("../models/operationModel");

module.exports = {
  async calculate(req, res) {
    try {
      const { num1, num2, operation } = req.body;

      if (num1 === undefined || num2 === undefined || operation === undefined) {
        throw new Error("Informe os parâmetros corretos...");
      }

      let result;

      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            throw new Error("Não é possível dividir por zero.");
          }
          result = num1 / num2;
          break;
        default:
          throw new Error(
            "Operação inválida. As operações suportadas são +, -, *, /."
          );
      }

      await Operation.create({ num1, num2, operation, result: result });
      return res
        .status(200)
        .json({ result });
    } catch (error) {
      return res.status(400).json({ message: `${error}` });
    }
  },
};
