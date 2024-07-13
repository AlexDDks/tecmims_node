const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../database/connection');
const { Course, Instructor } = require('../models/associations/courseintructor');





class CourseController {
    static async getAll(req, res) {
        try {
            const courses = await Course.findAll({
                include: [{
                    model: Instructor,
                    as: 'instructor',
                    attributes: ['name', "id"], // Solo incluye el nombre del instructor
                }],
            });
            const styles = [
                "/lesson7/resources/assets/css/app.css",
                "/lesson7/resources/assets/css/courses-list.css",
                "/lesson7/resources/assets/css/course-form.css",
                "/lesson7/resources/assets/css/edit-course.css",
                "/lesson7/resources/assets/css/show-course.css",
            ];

            res.render("index", {
                courses,
                instructors: [],
                styles,
                content: "courses/index"
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching courses' });
        }
    }
    static async create(req, res) {
        try {
            const { title, description, instructor, difficulty, language } = req.body;
            const errors = [];
            const findInstructor = await Instructor.findOne({ where: { name: instructor } })

            await Course.create({
                title,
                language,
                description,
                difficulty,
                instructor_id: findInstructor.dataValues.id,
            });
            console.log(findInstructor);
            res.redirect('/lesson7/courses');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating course' });
        }
    }
    static async getForm(req, res) {
        try {
            const styles = [
                "/lesson7/resources/assets/css/app.css",
                "/lesson7/resources/assets/css/courses-list.css",
                "/lesson7/resources/assets/css/course-form.css",
                "/lesson7/resources/assets/css/edit-course.css",
                "/lesson7/resources/assets/css/instructors-list.css",
                "/lesson7/resources/assets/css/show-course.css",
                "/lesson7/resources/assets/css/students-form.css",
                "/lesson7/resources/assets/css/students-list.css"
            ];
            const instructors = await Instructor.findAll();
            res.render('index', {
                instructors,
                errors: [],
                content: 'courses/create',
                styles
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching instructors' });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const course = await Course.findOne({
                include: [{
                    model: Instructor,
                    as: 'instructor',
                    attributes: ['name', "id"], // Solo incluye el nombre del instructor
                }],
                where: { id }
            })
            const styles = [
                "/lesson7/resources/assets/css/app.css",
                "/lesson7/resources/assets/css/show-course.css",
            ];
            res.render('index', {
                course,
                styles,
                content: 'courses/show',
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching course' });
        }
    }
    static async getFormEdit(req, res) {
        try {
            const { id } = req.params;
            const course = await Course.findOne({ where: { id } });
            const instructors = await Instructor.findAll();
            const styles = [
                "/lesson7/resources/assets/css/app.css",
                "/lesson7/resources/assets/css/courses-list.css",
                "/lesson7/resources/assets/css/course-form.css",
                "/lesson7/resources/assets/css/edit-course.css",
                "/lesson7/resources/assets/css/instructors-list.css",
                "/lesson7/resources/assets/css/show-course.css",
                "/lesson7/resources/assets/css/students-form.css",
                "/lesson7/resources/assets/css/students-list.css"
            ];
            res.render('index', {
                course,
                instructors,
                errors: [],
                styles,
                content: "courses/edit",
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching course' });
        }
    }
    static async update(req, res) {
        try {
            let { id } = req.params;
            id = parseInt(id);
            const { title, description, instructor, difficulty, language } = req.body;
            const instructorSaved = await Instructor.findOne({ where: { name: instructor } });
            await Course.update({
                title,
                language,
                description,
                difficulty,
                instructor_id: instructorSaved.dataValues.id
            },{where: {id}});

            res.redirect("/lesson7/courses")
        } catch (error) {
            console.log(error);
        }
    }
    static async delete(req, res){
        try {
            let { id } = req.params;
            id = parseInt(id);
            await Course.destroy({ where: { id } });
            res.redirect("/lesson7/courses")
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting course' });
        }
    }
}

module.exports = CourseController;