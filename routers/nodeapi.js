const {
  createNewRequirements,
} = require("../controller/customer.controller.js");
const { Router } = require("express");

const nodeapi = Router();

nodeapi.get("/", (req, res) => {
  res.status(200).send({ message: "API access check" });
});

nodeapi.post("/customer/create-requirement", createNewRequirements);

module.exports = { nodeapi };
