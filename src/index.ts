import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { DatabaseConnection, ExpressMiddleware } from "./config/default";
import { envVar } from "./env";
import { errorHandler } from "./middleware/errorHandler";
import { nodeapi } from "./routers/customer";
import path from "path";

const app: Application = express();
new ExpressMiddleware(app);
express.urlencoded({ extended: false });
new DatabaseConnection(mongoose);

// app.get("/", (req: Request, res: Response) => {
//   res.status(200).send("<h1>Welcome to Techsol backend APIs</h1>");
// })

app.use(express.static(path.resolve(__dirname, "build")));
console.log("🚀 ~ file: index.js:24 ~ path.resolve(__dirname, '/build')");

// routings
app.use("/api", nodeapi);

// error handling
app.use(errorHandler);

app.get("/*", function (req, res) {
  
  console.log(
    "🚀 ~ file: index.js:26 ~ /*:",
    path.resolve(__dirname, "build", "index.html")
  );
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});



const port: number = envVar.PORT;
app.listen(port, () => {
  console.log(`Application is running successfull on http://localhost:${port}`);
});
