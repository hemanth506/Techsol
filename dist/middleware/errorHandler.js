"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const constants_1 = require("../helper/constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log(statusCode);
    switch (statusCode) {
        case constants_1.constants.VALIDATION_ERROR:
            res.send({
                title: "Validation error",
                message: err.message,
                stacktrace: err.stack,
            });
            break;
        case constants_1.constants.NOT_FOUND:
            res.send({
                title: "Not found",
                message: err.message,
                stacktrace: err.stack,
            });
            break;
        case constants_1.constants.FORBIDDEN:
            res.send({
                title: "Forbidden",
                message: err.message,
                stacktrace: err.stack,
            });
            break;
        case constants_1.constants.SERVER_ERROR:
            res.send({
                title: "Server error",
                message: err.message,
                stacktrace: err.stack,
            });
            break;
        default:
            console.log("No error, All good!");
            next();
            break;
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map