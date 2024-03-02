const express = require("express");
const auth = require("../middleware/auth");
const { Task, validateTask } = require("../models/Task");

const router = express.Router();

// GET
router.get("/:id?", async (req, res) => {
  try {
    if (req.params.id) {
      const task = await Task.findById(req.params.id);
      if (!task) return res.status(404).send("Task not found");
      return res.send(task);
    }

    const tasks = await Task.find();
    return res.send(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).send("Internal Server Error");
  }
});

//POST
router.post("/", auth, async (req, res) => {
  const { error } = validateTask(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const task = new Task({
    title: req.body.title,
    description: req.body.description,
  });

  const result = await task.save();
  console.log("result", result);

  res.send(`Task created successfully`);
});

// PUT
router.put("/:id", auth, async (req, res) => {
  try {
    const { error } = validateTask(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      { new: true }
    );

    if (!task) return res.status(404).send("Task not found");

    res.send("Task updated successfully");
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).send("Internal Server Error");
  }
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send("Task not found");

    res.send("Task deleted successfully");
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
