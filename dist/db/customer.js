"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequirements = void 0;
const customer_model_1 = require("./customer.model");
const createRequirements = (customerRequirements) => customer_model_1.CustomerModel.create(customerRequirements);
exports.createRequirements = createRequirements;
//# sourceMappingURL=customer.js.map