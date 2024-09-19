# Task Management App

## Description
A role-based task management application that allows admins to assign tasks to users, manage task status, and receive push notifications via Firebase Cloud Messaging (FCM). The app provides full CRUD functionality, enabling users to create, read, update, and delete tasks in real-time.

## Features
- *Role-based access control*: Admin can assign tasks to users.
- *CRUD operations*: Create, read, update, and delete tasks.
- *Firebase Push Notifications*: Notifications for task updates and assignments via FCM tokens.
- *Real-time updates*: Tasks and status updates are instantly reflected.


1. Set up Firebase push notifications:
   - Create a Firebase project and enable Cloud Messaging.
   - Obtain your FCM server key and add it to your environment variables.

2. Create a \.env\ file in the backend directory and add your MongoDB connection string, FCM keys, and JWT secret:
   \\\`bash
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   FCM_SERVER_KEY=your_fcm_server_key
   \\\`

## API Endpoints

- *Tasks*:
  - \GET /api/tasks\ - Get all tasks
  - \POST /api/tasks\ - Create a new task
  - \PUT /api/tasks/:id\ - Update a task
  - \DELETE /api/tasks/:id\ - Delete a task

- *User Management*:
  - \POST /api/users/:id/assign\ - Assign a task to a user

- *Firebase Notifications*:
  - Push notifications for task updates via FCM

