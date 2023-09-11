"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVar = void 0;
const envalid_1 = require("envalid");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const portId = process.env.PORT;
exports.envVar = (0, envalid_1.cleanEnv)(process.env, {
    PORT: (0, envalid_1.port)({ default: portId }),
    MONGODB_URI: (0, envalid_1.str)({
        default: process.env.MONGODB_CONNECTION_STRING,
    }),
    FROM_EMAIL: (0, envalid_1.str)({
        default: process.env.FROM_EMAIL,
    }),
    FROM_PASS: (0, envalid_1.str)({
        default: process.env.FROM_PASS,
    }),
    TO_EMAIL: (0, envalid_1.str)({
        default: process.env.TO_EMAIL,
    }),
});
//# sourceMappingURL=env.js.map