const { CustomerModel } = require("./customer.model.js");

const createRequirements = (customerRequirements) => {
  return CustomerModel.create(customerRequirements);
};

module.exports = { createRequirements };
