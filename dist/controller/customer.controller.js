"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewRequirements = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const info_1 = require("../helper/info");
const customer_1 = require("../db/customer");
exports.createNewRequirements = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🚀 ~ file: customer.controller.ts:12 ~ req:", req.body);
    console.log("🚀 Hemanth test 🚀");
    if (!req.body.name || !req.body.phoneNumber || !req.body.requirement) {
        console.log("🚀 ~ file: customer.controller.ts:16 ~ Mandatory values are missing!:");
        res.status(400);
        throw new Error("Mandatory values are missing!");
    }
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email || "Not specified";
    const requirement = req.body.requirement;
    const details = {
        name,
        phoneNumber,
        email,
        requirement,
    };
    const requirementCreated = yield (0, customer_1.createRequirements)(details);
    console.log("🚀 ~ file: customer.ts:27 ~ router.post ~ New requirement created");
    const customerDetails = {
        name,
        phoneNumber,
        email,
        requirement,
        createdAt: requirementCreated.createdAt,
    };
    // res.status(201).send({
    //   customerID: requirementCreated._id
    // });
    (0, info_1.sendEmail)(customerDetails)
        .then((info) => {
        res.status(201).send({
            customerID: requirementCreated._id,
            mailDetails: Object.assign({ messageID: info.messageId }, info.envelope),
        });
    })
        .catch((err) => {
        res.status(400);
        throw new Error("Requirement created but Mail not sent!");
    });
}));
//# sourceMappingURL=customer.controller.js.map