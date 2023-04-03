const Router = require("express")
const { fileUpload, fileDownload, fileList } = require("../controllers/file.controller")
const router = Router()

router.post("/",fileUpload)
router.get("/download",fileDownload)
router.get("/",fileList)

module.exports = router