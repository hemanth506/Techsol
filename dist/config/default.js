"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = exports.ExpressMiddleware = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const env_1 = require("../env");
class ExpressMiddleware {
    constructor(app) {
        this.app = app;
        this.app.use(body_parser_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use(function (req, res, next) {
            // res.header("Content-Type", "application/json");
            res.header("Access-Control-Allow-Methods", "*");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });
        console.log("🚀 ~ default.ts:14 ~ Fetched Express Middleware!");
    }
}
exports.ExpressMiddleware = ExpressMiddleware;
class DatabaseConnection {
    constructor(mongoose) {
        this.mongoose = mongoose;
        if (env_1.envVar.MONGODB_URI !== undefined) {
            console.log("🚀 ~ file: default.ts:23 ~ DatabaseConnection ~ envVar.MONGODB_URI:", env_1.envVar.MONGODB_URI, "🚀");
            this.mongoose.connect(env_1.envVar.MONGODB_URI);
            this.mongoose.connection.on("error", (err) => {
                console.log("🚀 ~ default.ts:24 ~ DatabaseConnection ~ err:", err);
            });
            console.log("🚀 ~ default.ts:26 ~ dbConnection ~ Database connected!");
        }
        else {
            console.log("🚀 ~ file: default.ts:31 ~ DatabaseConnection ~ MONGODB_URI:", env_1.envVar.MONGODB_URI);
            throw new Error("Database connection error");
        }
    }
}
exports.DatabaseConnection = DatabaseConnection;
//# sourceMappingURL=default.js.map