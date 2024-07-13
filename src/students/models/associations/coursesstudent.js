const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../database/connection');
const CourseStudent = require('../../../courses/models/CourseStudent')(sequelize,DataTypes);
const Course = require('../../../courses/models/Course')(sequelize,DataTypes);
const Student = require('../../../students/models/Student')(sequelize,DataTypes);



Student.belongsToMany(Course, { through: CourseStudent, foreignKey: 'student_id' });
Course.belongsToMany(Student, { through: CourseStudent, foreignKey: 'course_id' });


module.exports = {
    Student,
    Course,
    CourseStudent,
}