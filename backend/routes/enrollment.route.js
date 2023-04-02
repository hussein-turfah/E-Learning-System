const Router = require("express")
const { enroll,listEnrolledUsers } = require("../controllers/enrollment.controller")
const router = Router()

router.post("/", enroll)
router.get("/list",listEnrolledUsers)

module.exports = router