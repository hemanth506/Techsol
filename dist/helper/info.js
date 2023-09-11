"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_1 = require("../env");
const sendEmail = (customerDetails) => {
    let config = {
        service: "gmail",
        auth: {
            user: env_1.envVar.FROM_EMAIL,
            pass: env_1.envVar.FROM_PASS,
        },
    };
    let transport = nodemailer_1.default.createTransport(config);
    let htmlMessage = "<h2>New Customer enquiry ✔</h2> <br>" +
        `<b>Name: ${customerDetails.name}<br>` +
        `Phone Number: ${customerDetails.phoneNumber}<br>` +
        `Email: ${customerDetails.email}<br>` +
        `Requirement: ${customerDetails.requirement}<br> ` +
        `Enquiry registered: ${customerDetails.createdAt}</b>`;
    let message = {
        from: env_1.envVar.FROM_EMAIL,
        to: env_1.envVar.TO_EMAIL,
        subject: `🚀 New Customer Enquiry - ${customerDetails.phoneNumber} 🚀`,
        text: "New Customer enquiry ✔",
        html: htmlMessage, // html body
    };
    return transport.sendMail(message);
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=info.js.map