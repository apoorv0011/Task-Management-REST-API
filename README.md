# Personal Task Manager API

A simple and robust REST API built to manage personal tasks efficiently. This project uses Node.js and Express, with data stored in-memory for quick access and testing.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### 2. Installation
Clone the repository (or download the files) and install the required dependencies:

```bash
npm install
```

### 3. Running the Server
To start the server in production mode:
```bash
npm start
```
For development (with automatic restarts):
```bash
npm run dev
```

The API will be accessible at `http://localhost:5000`.

---

## API Endpoints

The base URL for all endpoints is `http://localhost:5000/api/tasks`.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/` | Create a new task |
| **GET** | `/` | Retrieve all tasks |
| **GET** | `/:id` | Get a single task by ID |
| **PUT** | `/:id` | Update task title or description |
| **PATCH** | `/:id/done`| Mark a task as completed |
| **DELETE** | `/:id` | Delete a task |

---

## Testing with Postman

To test the API using Postman, ensure the server is running and follow the instructions for each endpoint below.

### 1. Create a Task
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/tasks`
- **Body:** Select `raw` and `JSON`.
- **JSON Payload:**
```json
{
  "title": "Complete Project",
  "description": "Ensure the API is fully functional"
}
```

### 2. Get All Tasks
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/tasks`

### 3. Get a Task by ID
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/tasks/1`

### 4. Update a Task
- **Method:** `PUT`
- **URL:** `http://localhost:5000/api/tasks/1`
- **Body:** Select `raw` and `JSON`.
- **JSON Payload:**
```json
{
  "title": "Updated Task Title",
  "description": "Updating the description"
}
```

### 5. Mark Task as Done
- **Method:** `PATCH`
- **URL:** `http://localhost:5000/api/tasks/1/done`

### 6. Delete a Task
- **Method:** `DELETE`
- **URL:** `http://localhost:5000/api/tasks/1`

---

## Filtering & Sorting

You can use query parameters in Postman to filter or sort tasks.

- **Filter by Status:** `GET http://localhost:5000/api/tasks?status=pending` (or `done`)
- **Sort by Date:** `GET http://localhost:5000/api/tasks?sort=createdAt`

---

## Technical Details
- **Stack:** Node.js, Express.js
- **Data:** In-memory storage (Resets on server restart)
- **Validation:** Returns `400` for missing fields and `404` for invalid IDs.
