# To-Do App

This is a full-stack To-Do application built using **React** for the frontend and **Spring Boot (Java)** for the backend. Users can manage tasks by adding, editing, and deleting them. This project integrates both frontend and backend components to function as a complete application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Backend (Spring Boot)](#running-the-backend-spring-boot)
  - [Frontend (React)](#running-the-frontend-react)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Java 11 or later** (for Spring Boot backend)
- **Node.js** and **npm** (for React frontend)
- **Maven** (for managing Java dependencies)

You can download the necessary software from:
- [Java 11+](https://adoptopenjdk.net/)
- [Node.js](https://nodejs.org/)
- [Maven](https://maven.apache.org/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rahul-18r/To-Do.git
   ```

2. Navigate to the project directory:
   ```bash
   cd To-Do
   ```

## Running the Application

### Running the Backend (Spring Boot)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies (if needed):
   ```bash
   mvn install
   ```

3. Run the backend using Maven:
   ```bash
   mvn spring-boot:run
   ```

The Spring Boot server will start and be available at:
```
http://localhost:8080
```

### Running the Frontend (React)

1. Navigate to the frontend directory:
   ```bash
   cd ../todo-app-frontend
   ```

2. Install the dependencies using npm:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The React app will start and be available at:
```
http://localhost:3000
```

Your application should now be running with:
- Backend: http://localhost:8080
- Frontend: http://localhost:3000

## API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/tasks` | Fetch all tasks |
| POST   | `/tasks` | Create a new task |
| PUT    | `/tasks/{id}` | Update an existing task |
| DELETE | `/tasks/{id}` | Delete a task |

## Project Structure

The project is organized into two main components:

### 1. Backend (Spring Boot)

```
To-Do-App [To-Do]/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com.todo_app/
│   │   │       ├── Configuration/
│   │   │       │   └── WebConfig.java
│   │   │       ├── Controller/
│   │   │       │   └── TaskController.java
│   │   │       ├── exception/
│   │   │       │   ├── GlobalExceptionHandler.java
│   │   │       │   └── UserExceptionHandler.java
│   │   │       ├── model/
│   │   │       │   └── Task.java
│   │   │       ├── repository/
│   │   │       │   └── TaskRepository.java
│   │   │       ├── Service/
│   │   │       └── ToDoApplication.java
│   │   └── resources/
│   └── test/
└── target/
```

### 2. Frontend (React)

```
todo-app-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddTask.js
│   │   └── TaskList.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── package-lock.json
```

---

*Created and maintained by [Rahul-18r](https://github.com/Rahul-18r)*
