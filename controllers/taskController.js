let tasks = [];

let currentId = 1;

const createTask = (req, res) => {
  const { title, description = "" } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const newTask = {
    id: currentId++,

    title,

    description,

    status: "pending",

    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

const getAllTasks = (req, res) => {
  let filteredTasks = [...tasks];

  if (req.query.status) {
    filteredTasks = filteredTasks.filter(
      (task) => task.status === req.query.status,
    );
  }

  if (req.query.sort === "createdAt") {
    filteredTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  res.status(200).json(filteredTasks);
};

const getTaskById = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.status(200).json(task);
};

const updateTask = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const { title, description } = req.body;

  if (!title && !description) {
    return res.status(400).json({
      message: "Nothing to update",
    });
  }

  if (title) task.title = title;

  if (description) task.description = description;

  res.status(200).json(task);
};

const markDone = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.status = "done";

  res.status(200).json(task);
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const deletedTask = tasks.splice(index, 1);

  res.status(200).json({
    message: "Task deleted successfully",
    task: deletedTask[0],
  });
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  markDone,
  deleteTask,
};
