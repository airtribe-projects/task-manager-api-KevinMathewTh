# Express Task Manager API

This is a simple REST API built with Express.js that allows users to manage tasks. It provides endpoints to create, retrieve, update, and delete tasks.

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   node server.js
   ```

   The server will start on `http://localhost:3000`.

## Testing the API with Postman

Follow these steps to test the API using Postman:

### 1. Get All Tasks

- **Method:** `GET`
- **URL:** `http://localhost:3000/tasks`
- **Steps:**
  1. Open Postman
  2. Set method to `GET`
  3. Enter the URL `http://localhost:3000/tasks`
  4. Click **Send**

#### Filter by Completion Status

- **URL:** `http://localhost:3000/tasks?completed=true`

### 2. Get Task by ID

- **Method:** `GET`
- **URL:** `http://localhost:3000/tasks/:id`
- **Steps:**
  1. Replace `:id` with a valid task ID (e.g., `1`)
  2. Click **Send**

### 3. Get Tasks by Priority

- **Method:** `GET`
- **URL:** `http://localhost:3000/tasks/priority/:level`
- **Steps:**
  1. Replace `:level` with `low`, `medium`, or `high`
  2. Click **Send**

### 4. Create a Task

- **Method:** `POST`
- **URL:** `http://localhost:3000/tasks`
- **Body (JSON format):**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "priority": "medium"
  }
  ```
- **Steps:**
  1. Select **POST** method
  2. Go to the **Body** tab, select **raw**, and set format to **JSON**
  3. Enter the JSON payload
  4. Click **Send**

### 5. Update a Task

- **Method:** `PUT`
- **URL:** `http://localhost:3000/tasks/:id`
- **Body (JSON format):**
  ```json
  {
    "title": "Updated Task",
    "description": "Updated Description",
    "completed": true,
    "priority": "high"
  }
  ```
- **Steps:**
  1. Replace `:id` with the task ID
  2. Select **PUT** method
  3. Enter the JSON payload in the **Body** section
  4. Click **Send**

### 6. Delete a Task

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/tasks/:id`
- **Steps:**
  1. Replace `:id` with the task ID to be deleted
  2. Select **DELETE** method
  3. Click **Send**

## License

This project is licensed under the MIT License.

