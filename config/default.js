const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const { envVar } = require("../env.js");

class ExpressMiddleware {
  app;
  constructor(app) {
    this.app = app;
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(compression());
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

class DatabaseConnection {
  mongoose;
  constructor(mongoose) {
    this.mongoose = mongoose;
    if (envVar.MONGODB_URI !== undefined) {
      console.log(
        "🚀 ~ file: default.ts:23 ~ DatabaseConnection ~ envVar.MONGODB_URI:",
        envVar.MONGODB_URI,
        "🚀"
      );
      this.mongoose.connect(envVar.MONGODB_URI);
      this.mongoose.connection.on("error", (err) => {
        console.log("🚀 ~ default.ts:24 ~ DatabaseConnection ~ err:", err);
      });
      console.log("🚀 ~ default.ts:26 ~ dbConnection ~ Database connected!");
    } else {
      console.log(
        "🚀 ~ file: default.ts:31 ~ DatabaseConnection ~ MONGODB_URI:",
        envVar.MONGODB_URI
      );
      throw new Error("Database connection error");
    }
  }
}

module.exports = { ExpressMiddleware, DatabaseConnection };
