"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const default_1 = require("./config/default");
const env_1 = require("./env");
const errorHandler_1 = require("./middleware/errorHandler");
const customer_1 = require("./routers/customer");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
new default_1.ExpressMiddleware(app);
express_1.default.urlencoded({ extended: false });
new default_1.DatabaseConnection(mongoose_1.default);
// app.get("/", (req: Request, res: Response) => {
//   res.status(200).send("<h1>Welcome to Techsol backend APIs</h1>");
// })
app.use(express_1.default.static(path_1.default.resolve(__dirname, "build")));
console.log("🚀 ~ file: index.js:24 ~ path.resolve(__dirname, '/build')");
// routings
app.use("/api", customer_1.nodeapi);
// error handling
app.use(errorHandler_1.errorHandler);
app.get("/*", function (req, res) {
    console.log("🚀 ~ file: index.js:26 ~ /*:", path_1.default.resolve(__dirname, "build", "index.html"));
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path_1.default.resolve(__dirname, "build", "index.html"));
});
const port = env_1.envVar.PORT;
app.listen(port, () => {
    console.log(`Application is running successfull on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map