const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/connection");
const CourseStudent = require("../CourseStudent")(sequelize,DataTypes);
const Instructor = require("../../../instructors/models/Instructor")(sequelize,DataTypes)
const Course = require("../../../courses/models/Course")(sequelize,DataTypes)

Student.belongsToMany(Course, { through: CourseStudent });
Course.belongsToMany(Student, { through: CourseStudent });
module.exports = {
    Course,
    Student,
    CourseStudent,
}