const mongoose = require("mongoose");
const Joi = require("joi");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  description: {
    type: String,
    maxLength: 128,
  },
});

const Task = mongoose.model("Task", taskSchema);

const validateTask = (task) => {
  const schema = Joi.object().keys({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().max(128).allow(null, ""),
  });

  return schema.validate(task);
};

module.exports = { Task, validateTask };
