const express = require("express");
const mongoose = require("mongoose");

const port = 3000;

const app = express();

require("./routes")(app);

if (!process.env.JWT_PRIVATE_KEY) {
  throw new Error("FATAL ERROR: jwtPrivateKey is not defined");
}

process.on("uncaughtException", (ex) => {
  console.error(ex.message, ex);
  process.exit(1);
});

process.on("unhandledRejection", (ex) => {
  console.error(ex.message, ex);
  process.exit(1);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// DB connection
mongoose
  .connect("mongodb://localhost:27017/todoappdb")
  .then(() => console.log("Connected to Vidly database..."));
