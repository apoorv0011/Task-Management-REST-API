const express = require("express");

const router = express.Router();

const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  markDone,
  deleteTask,
} = require("../controllers/taskController");

router.post("/", createTask);

router.get("/", getAllTasks);

router.get("/:id", getTaskById);

router.put("/:id", updateTask);

router.patch("/:id/done", markDone);

router.delete("/:id", deleteTask);

router.all("/", (req, res) => {
  res.status(405).json({
    message: "Method Not Allowed",
  });
});

router.all("/:id", (req, res) => {
  res.status(405).json({
    message: "Method Not Allowed",
  });
});

module.exports = router;
