const {Router} = require("express")
const CourseController = require("./controllers/Course")

const courseRouter = Router()

courseRouter.get("/",(req,res)=>{
    CourseController.getAll(req,res)
})

courseRouter.get("/details/:id",(req,res)=>{
    CourseController.getById(req,res)
})

courseRouter.get("/edit/:id",(req,res)=>{
    CourseController.getFormEdit(req,res)
})

courseRouter.post("/edit/:id",(req,res)=>{
    CourseController.update(req,res)
})

courseRouter.get("/delete/:id",(req,res)=>{
    CourseController.delete(req,res)
})

courseRouter.get("/new",(req,res)=>{
    CourseController.getForm(req,res)
})
courseRouter.post("/new",(req,res)=>{
    CourseController.create(req,res)
})



module.exports = courseRouter