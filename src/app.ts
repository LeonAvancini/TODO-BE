import express from "express";
import mongoose from "mongoose";
const tasks = require("../routes/tasks");

const port: number = 3000;

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/todoappdb")
  .then(() => console.log("Connected to Vidly database..."));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.use("/api/tasks", tasks);
