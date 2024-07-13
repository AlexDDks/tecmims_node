const {Router} = require("express")
const {InstructorController} = require("./controllers/Instructor")
const UploadFile = require("../../lib/multer")
const Multer = require("../../lib/multer")

const instructorRouter = Router()

instructorRouter.get("/",(req,res)=>{
    InstructorController.getAll(req,res)
})
instructorRouter.post("/",Multer.UploadFile,(req,res)=>{
    InstructorController.register(req,res)
})

instructorRouter.get("/new",(req,res)=>{
    InstructorController.getForm(req,res)
})

instructorRouter.get("/delete/:id",(req,res)=>{
    InstructorController.delete(req,res)
})

instructorRouter.get("/:id/courses",(req,res)=>{
    InstructorController.viewCourses(req,res)
})


module.exports = instructorRouter