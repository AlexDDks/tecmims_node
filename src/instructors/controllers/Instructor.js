const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/connection");
const Multer = require("../../../lib/multer");
const { Instructor, Course } = require("../../courses/models/associations/courseintructor");


class InstructorController {
    static async getAll(req, res) {
        try {
            const instructors = await Instructor.findAll();
            const styles = [
                "/lesson7/resources/assets/css/app.css",
                "/lesson7/resources/assets/css/instructors-list.css",
            ];
            res.render("index", {
                content: "instructors/instructorsList",
                styles,
                instructors
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching instructors' });
        }
    }
    static async getForm(req, res) {
        const styles = [
            "/lesson7/resources/assets/css/app.css",
            "/lesson7/resources/assets/css/courses-list.css",
            "/lesson7/resources/assets/css/instructors-form.css"
        ];
        res.render("index", {
            content: "instructors/instructorForm",
            styles
        })
    }
    static async register(req, res) {
        try {
            const { name, email } = req.body;
            const image_path = Multer.fileName;
            Multer.fileName = ""

            await Instructor.create({ name, email, image_path });
            res.redirect("/lesson7/instructors");
        } catch (error) {
            console.log(error);
        }
    }
    static async getCourses(req, res) {
        try {
            const { id } = req.params
            const courses = await Course.findAll({
                where: { instructor_id: id },
                include: {
                    model: Instructor,
                    as: 'instructor'
                }
            });
            const instructor = await Instructor.findAll({
                where: { id },
                include: {
                    model: Course,
                    as: 'course'
                }
            })
            console.log(courses);
            res.render("index", {
                courses,
                instructor,
                errors: [],
                content: "instructors/instructorCourses",
                styles: [
                    "/lesson7/resources/assets/css/app.css",
                    "/lesson7/resources/assets/css/instructors-list.css",
                    "/lesson7/resources/assets/css/course-form.css"
                ]
            })
        } catch (error) {
            console.log(error);
        }
    }
    static async viewCourses(req, res){
        try {
            const {id} = req.params
            const courses = await Course.findAll({
                where: { instructor_id: id }
            });
            const instructor = await Instructor.findOne({
                where: { id }
            });
            const styles = [
                "/lesson7/resources/assets/css/app.css",
                "/lesson7/resources/assets/css/courses-list.css",
                "/lesson7/resources/assets/css/course-form.css",
                "/lesson7/resources/assets/css/edit-course.css",
                "/lesson7/resources/assets/css/show-course.css",
            ];
            res.render('index', {
                courses,
                instructor,
                error: false,
                styles,
                content: 'instructors/instructorCourses',
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching course' });
        }
    }
    static async delete(req,res){
        try {
            const { id } = req.params
            await Instructor.destroy({ where: { id } });
            res.redirect("/lesson7/instructors");
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting instructor' });
        }
    }
}

module.exports = { InstructorController };