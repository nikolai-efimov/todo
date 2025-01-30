# Todo API

A simple Node.js API that provides a persistent list of **33 todos**. The API is containerized using **Docker** and can be easily deployed anywhere.

---

## 🚀 Features

- Exposes a `/todos` endpoint that returns a **fixed list of 33 todo items**.
- Supports query parameters `start` and `end` to fetch a subset of todos.
- Each todo item contains:
  - `id` (unique identifier)
  - `title` (description of the task)
  - `completed` (boolean: `true` or `false`)
- Built with **Node.js** and **Express.js**.
- Containerized using **Docker** for easy deployment.

---

## 📦 Installation & Running Locally

1. **Clone the repository**
   ```sh
   git clone https://github.com/lunohod1/todo.git
   cd todo
   ```
2. **Install dependencies**
    ```
    npm install
    ```
3. **Start the server**
    ```
    node server.js
    ```
The API will be running at http://localhost:8080/todos

## 🛠 API Usage
Fetch Todos
- **Endpoint**:
  ```
  GET /todos?start={number}&end={number}
  ```
- **Query Parameters:**<br>
  `start` (optional) – Starting index (default: `1`)<br>
  `end` (optional) – Ending index (default: `33`)<br>
  <br>
- **Example Request:**
  ```
  GET /todos?start=5&end=10
  ```
- **Example Response:**
  ```
  [
    { "id": 5, "title": "Todo 5", "completed": false },
    { "id": 6, "title": "Todo 6", "completed": true },
    { "id": 7, "title": "Todo 7", "completed": false },
    { "id": 8, "title": "Todo 8", "completed": true },
    { "id": 9, "title": "Todo 9", "completed": false },
    { "id": 10, "title": "Todo 10", "completed": true }
  ]
  ```

## 🐳 Docker Setup
1. **Build the Docker Image**
    ```
    docker build -t lunohod1/todo .
    ```
2. **Run the Container**
    ```
    docker run -p 8080:8080 lunohod1/todo
    ```
    The API will be available at http://localhost:8080/todos
    <br>

3. **Push to Docker Hub**
    ```
    docker login
    docker push lunohod1/todo
    ```
4. **Run from Docker Hub**
    ```
    docker run -p 8080:8080 lunohod1/todo
    ```
## 📁 Project Structure
```
todo/
│── server.js        # Main API server
│── todos.js         # Persistent list of 33 todos
│── package.json     # Node.js dependencies
│── Dockerfile       # Docker container configuration
│── .dockerignore    # Files ignored in Docker build
│── README.md        # Project documentation
```

## 📜 License
MIT License
