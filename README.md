# Task Manager API

This is a simple REST API built with Express for managing a task list. It allows you to create, view, update, and delete tasks.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

The server will run at `http://localhost:5000`.

## API Endpoints

The base URL is `http://localhost:5000/api/tasks`.

- `POST /` - Add a new task (Requires `title`).
- `GET /` - List all tasks.
- `GET /:id` - Get details of a single task.
- `PUT /:id` - Update a task's title or description.
- `PATCH /:id/done` - Mark a task as completed.
- `DELETE /:id` - Remove a task.

## Features

- **Filtering:** You can filter by status using `?status=pending` or `?status=done`.
- **Sorting:** Use `?sort=createdAt` to sort tasks from oldest to newest.
- **Error Handling:** Returns proper status codes (400, 404, 405) for invalid requests.

> **Note:** This project uses in-memory storage. All data will reset when the server restarts.
