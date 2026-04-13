const express = require("express");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});