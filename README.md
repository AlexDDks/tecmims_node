# Full Stack E-commerce: TechyNet

## Description

This project is a full-stack web application built with Express.js. It uses EJS as a templating engine, native JavaScript, and CSS for front-end functionality and styling. The project follows the MVC (Model-View-Controller) pattern and includes database integration for performing all CRUD (Create, Read, Update, Delete) operations.
## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AlexDDks/tecmims_node.git
    cd tecmims_node
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up your database:**
    - **Create a new MySQL database:**
        ```sql
        CREATE DATABASE courses;
        ```

5. **Update the database configuration in the project:**
    - **Rename your `.env.example` file to `.env` and set your database credentials:**
        ```
        DB_NAME=courses
        DB_PORT=...
        DB_USER=root
        DB_PASS=...
        DB_HOST=localhost
        SERVER_HOST=http://localhost:3000
        SERVER_PORT=3000
        ```

6. **Run the application to create database tables automatically:**
    ```bash
    npm start
    ```

7. **Seed the database with initial data:**
    ```bash
    npx sequelize-cli db:seed:all
    ```
    Should be seed in the order:
    1. Instructors
    2. Courses
    3. Students
    4. Course-Students

8. **Open your browser and navigate to `http://localhost:3000/lesson7/courses`.**

## License
This project is licensed under the MIT License. See the LICENSE file for details.
