const express = require("express");
const path = require("path");
const { nodeapi } = require("./routers/nodeapi.js");
const mongoose = require("mongoose");
const {
  DatabaseConnection,
  ExpressMiddleware,
} = require("./config/default.js");
const { envVar } = require("./env.js");
const { errorHandler } = require("./middleware/errorHandler.js");

const app = express();
new ExpressMiddleware(app);
express.urlencoded({ extended: false });
new DatabaseConnection(mongoose);

app.use(express.static(path.resolve(__dirname, "build")));
console.log("🚀 ~ file: index.js:24 ~ path.join(__dirname, '/build')");

// error handling
app.use(errorHandler);

// routings
app.use("/api", nodeapi);

app.get("*", function (req, res) {
  console.log(
    "🚀 ~ file: index.js:26 ~ /*:",
    path.join(__dirname, "build", "index.html")
  );
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const port = envVar.PORT;
app.listen(port, () => {
  console.log(`Application is running successfull on http://localhost:${port}`);
});
