"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = exports.CustomerSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.CustomerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
    requirement: { type: String, required: true },
}, {
    timestamps: true,
});
exports.CustomerModel = mongoose_1.default.model("Customer", exports.CustomerSchema);
//# sourceMappingURL=customer.model.js.map