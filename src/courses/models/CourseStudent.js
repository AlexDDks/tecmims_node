const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/connection");
const Course = require("./Course")(sequelize,DataTypes);
const Student = require("../../students/models/Student")(sequelize,DataTypes);


module.exports = ()=>{
    const CourseStudent = sequelize.define('Course_student', {
            course_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Course,
                    key: 'id'
                },
                allowNull: false
            },
            student_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Student,
                    key: 'id'
                },
                allowNull: false
            }
        }, {
            tableName: 'courses_students',
            timestamps: true,
            underscored: true
        });
    return CourseStudent
} 

