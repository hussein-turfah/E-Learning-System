const Router = require("express")
const { addCourse } = require("../controllers/course.controller")
const router = Router()

router.post("/add_course", addCourse)

module.exports = router