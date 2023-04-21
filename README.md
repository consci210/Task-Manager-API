# Task-Manager-API

- This is a RESTful API for managing tasks.
- Users can create, edit, delete, and view all available tasks. 
- The API is built using Node, Express and MongoDB, and it can be tested using Postman. 
- To use the API, users must configure their own MongoDB URL in a .env file.

## Getting Started
To get started with the Task Manager API, follow these steps:
1. Clone this repository to your local machine.
2. Install the dependencies using npm install.
3. Create a .env file in the root directory of the project, and add your MongoDB URL in the following format:
```
MONGODB_URL=<your-mongodb-url>
```
4. Start the server using npm start.
5. Use Postman to test the API endpoints.

## API Endpoints
- All API endpoints have the prefix ` /api/v1/tasks `. 
- The following API endpoints are available:
  - GET /: Get all tasks
  - POST /: Create a new task
  - GET /:id: Get a task by ID
  - PATCH /:id: Update a task by ID
  - DELETE /:id: Delete a task by ID
