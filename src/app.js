const express = require("express");
const mongoose = require("mongoose");

const port = 3000;

const app = express();

require("./routes")(app);

if (!process.env.JWT_PRIVATE_KEY) {
  throw new Error("FATAL ERROR: jwt private key is not defined!");
}

if (!process.env.DB_URI) {
  throw new Error("FATAL ERROR: DB URI is not defined!");
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
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to todoapp database..."));
