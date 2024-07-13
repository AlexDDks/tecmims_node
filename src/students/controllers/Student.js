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
            let { name, course_id } = req.body;
            console.log('Received course_id:', course_id);
            console.log('Request body:', req.body);

            // Asegúrate de que course_id es un array
            if (!Array.isArray(course_id)) {
                course_id = [course_id];
            }

            // Convertir cada course_id a entero y verificar que no sea NaN
            course_id = course_id.map(id => {
                const parsedId = parseInt(id, 10);
                if (!isNaN(parsedId)) {
                    return parsedId;
                } else {
                    console.error(`Invalid course_id: ${id}`);
                    return null;
                }
            }).filter(id => id !== null); // Filtra los IDs no válidos

            console.log('Parsed course_id array:', course_id);

            // Crea el nuevo estudiante
            const newStudent = await Student.create({ name });
            const student_id = newStudent.dataValues.id;
            console.log(`Created student_id: ${student_id}`);

            // Inserta cada curso seleccionado en la tabla CourseStudent
            for (let courseId of course_id) {
                console.log(`Inserting course_id: ${courseId} with student_id: ${student_id}`);
                await CourseStudent.create({ course_id: courseId, student_id });
            }

            res.redirect("/lesson7/students");
        } catch (error) {
            console.error(error);
            res.redirect("/lesson7/students");
        }
    }
}

module.exports = StudentController;