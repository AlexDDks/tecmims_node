const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../database/connection');
const {Course, CourseStudent, Student } = require('../models/associations/coursesstudent');
// const Student = require('../models/Student')(sequelize,DataTypes);

class StudentController {
    static async getAll(req, res) {
        try {
            const students = await Student.findAll({
                include: [
                  {
                    model: Course,
                    through: {
                      attributes: []
                    }
                  }
                ]
              });
              console.log(students[0].Courses[0].dataValues.title);
            const styles = [
                "/lesson7/resources/assets/css/app.css",
                "/lesson7/resources/assets/css/students-list.css"
            ];
            res.render('index', {
                content: 'students/index',
                styles, 
                students
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching students' });
        }
    }
    static async getForm(req,res){
        const styles = [
            "/lesson7/resources/assets/css/app.css",
            "/lesson7/resources/assets/css/students-form.css",
            "/lesson7/resources/assets/css/booutstrap.main.css",
        ];
        const courses = await Course.findAll()
        res.render('index', {
            courses,
            content:'students/create',
            styles
        });
    }
    static async create(req, res) {
        try {
            let { name, course_id} = req.body;
            course_id = parseInt(course_id)
            const newStudent = await Student.create({ name});
            const student_id = newStudent.dataValues.id
            await CourseStudent.create({ course_id, student_id })
            res.redirect("/lesson7/students");
        } catch (error) {
            console.error(error);
            res.redirect("/lesson7/students");

        }
    }
}


module.exports = StudentController;