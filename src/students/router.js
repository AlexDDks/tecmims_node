const {Router} = require("express")
const StudentController = require("./controllers/Student")
const studentRouter = Router()

studentRouter.get("/",(req,res)=>{
    StudentController.getAll(req,res)
})

studentRouter.get("/new",(req,res)=>{
    StudentController.getForm(req,res)
})

studentRouter.post("/new",(req,res)=>{
    StudentController.create(req,res)
})

module.exports = studentRouter;