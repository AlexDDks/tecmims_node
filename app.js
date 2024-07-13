const express = require("express");
const {join} = require("path");
const { router } = require("./src/router");
const { initializeDatabase } = require("./database/initialize");
require("./src/courses/models/Course.js")
require("./src/courses/models/CourseStudent.js")
require("./src/instructors/models/Instructor.js")
require("./src/students/models/Student.js")


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/lesson7/resources", express.static(join(__dirname,"./public")));
app.set("view engine", "ejs");

const SERVER_PORT = process.env.SERVER_PORT

app.use("/lesson7",router)


const startServer = async () => {
  await initializeDatabase(); // Inicializa la base de datos antes de empezar el servidor

  app.listen(SERVER_PORT, () => {
    console.log("SERVER RUNNING IN http://localhost:3000/lesson7/courses");
  });
};

startServer();