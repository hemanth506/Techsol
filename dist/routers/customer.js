"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeapi = void 0;
const customer_controller_1 = require("../controller/customer.controller");
const express_1 = require("express");
exports.nodeapi = (0, express_1.Router)();
exports.nodeapi.post("/customer/create-requirement", customer_controller_1.createNewRequirements);
//# sourceMappingURL=customer.js.map