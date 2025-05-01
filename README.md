To-Do App
This is a full-stack To-Do application built using React for the frontend and Spring Boot (Java) for the backend. Users can manage tasks by adding, editing, and deleting them. This project also integrates both frontend and backend, so you can run it as a full-stack application.

Table of Contents
Prerequisites

Running the Backend

Running the Frontend

API Endpoints

Project Structure

Contributing

Prerequisites
Before you begin, make sure you have the following installed:

Java 11 or later (for Spring Boot backend)

Node.js and npm (for React frontend)

Maven (for managing Java dependencies)

You can download the necessary software from:

Java 11+

Node.js

Maven

Running the Backend (Spring Boot)
Clone the repository: git clone https://github.com/Rahul-18r/To-Do.git

Navigate to the backend directory: cd To-Do/backend

Install dependencies (if needed): mvn install

Run the backend using Maven: mvn spring-boot:run

This will start the Spring Boot server, which will be available at: http://localhost:8080

Running the Frontend (React)
Navigate to the frontend directory: cd To-Do/todo-app-frontend

Install the dependencies using npm: npm install

Start the React development server: npm start

This will start the React app, which will be available at: http://localhost:3000

Your application should now be running at both:

Backend: http://localhost:8080

Frontend: http://localhost:3000

API Endpoints
You can interact with the backend through the following API endpoints:

GET /tasks: Fetch all tasks

POST /tasks: Create a new task

PUT /tasks/{id}: Update an existing task

DELETE /tasks/{id}: Delete a task

Project Structure
The project is divided into two main parts:

1. Backend (Spring Boot)
src/main/java/com/todo_app: Contains Java files for the Spring Boot backend, including controllers and models.

src/main/resources: Contains configuration files like application.properties.

pom.xml: The Maven configuration file for the backend.

2. Frontend (React)
todo-app-frontend/src: Contains the React app source code.

components: React components for managing tasks, such as AddTask.js and TaskList.js.

services: The api.js file that handles HTTP requests to the backend.

styles.css: Custom CSS for the app.

todo-app-frontend/package.json: The npm configuration file for the frontend.

Contributing
Feel free to fork the project, submit issues, or create pull requests. Contributions are always welcome!

Steps to Contribute:
Fork the project on GitHub.

Clone your fork to your local machine.

Make your changes and push them to your fork.

Create a pull request to merge your changes into the main repository.

Thank you for checking out the project!
