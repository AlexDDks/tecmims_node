const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/connection");
const Instructor = require("../../../instructors/models/Instructor")(sequelize,DataTypes)
const Course = require("../../../courses/models/Course")(sequelize,DataTypes)

Instructor.hasMany(Course, { foreignKey: 'instructor_id', as: 'course' });
Course.belongsTo(Instructor, { foreignKey: 'instructor_id', as: 'instructor' });

module.exports = {
    Instructor,
    Course,
}