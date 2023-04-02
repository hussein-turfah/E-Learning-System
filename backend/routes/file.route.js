const Router = require("express")
const { fileUpload } = require("../controllers/file.controller")
const router = Router()

router.post("/",fileUpload)

module.exports = router