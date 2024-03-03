const express = require("express");

const tasks = require("./tasks");
const auth = require("./auth");
const users = require("./users");
const error = require("../middleware/error");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/tasks", tasks);
  app.use("/api/auth", auth);
  app.use("/api/users", users);
  app.use(error);
};
