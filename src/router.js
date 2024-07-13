const {Router} = require("express")
const instructorRouter  = require("./instructors/router")
const courseRouter = require("./courses/router")
const studentRouter = require("./students/router")
const router = Router()


router.use("/instructors",instructorRouter)
router.use("/courses",courseRouter)
router.use("/students",studentRouter)

module.exports = {router};