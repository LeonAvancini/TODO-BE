const express = require("express");
const mongoose = require("mongoose");
const tasks = require("../routes/tasks");
const auth = require("../routes/auth");
const users = require("../routes/users");

const port = 3000;

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/todoappdb")
  .then(() => console.log("Connected to Vidly database..."));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.use("/api/tasks", tasks);
app.use("/api/auth", auth);
app.use("/api/users", users);
