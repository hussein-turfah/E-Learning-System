const Router = require("express")
const { enroll } = require("../controllers/enrollment.controller")
const router = Router()

router.post("/", enroll)

module.exports = router