import { Application, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import { envVar } from "../env";

export class ExpressMiddleware {
  app: Application;
  constructor(app: Application) {
    this.app = app;
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(function (req: Request, res: Response, next: NextFunction) {
      // res.header("Content-Type", "application/json");
      res.header("Access-Control-Allow-Methods", "*");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });
    console.log("🚀 ~ default.ts:14 ~ Fetched Express Middleware!");
  }
}

export class DatabaseConnection {
  mongoose: any;
  constructor(mongoose: any) {
    this.mongoose = mongoose;
    if (envVar.MONGODB_URI !== undefined) {
      console.log(
        "🚀 ~ file: default.ts:23 ~ DatabaseConnection ~ envVar.MONGODB_URI:",
        envVar.MONGODB_URI,
        "🚀"
      );
      this.mongoose.connect(envVar.MONGODB_URI);
      this.mongoose.connection.on("error", (err: Error) => {
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
