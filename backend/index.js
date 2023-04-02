const express = require ("express");
const app = express();
require ("dotenv").config()
app.use(express.json())

const auth_router = require("./routes/auth.routes")
app.use('/auth', auth_router)

const course_router = require("./routes/course.route")
app.use('/course', course_router)

const enrollment_router = require("./routes/enrollment.route")
app.use('/enroll', enrollment_router)

const file_router = require("./routes/file.route")
app.use('/file', file_router)

app.listen(process.env.PORT,(err)=>{
  if (err) console.error(err)
  console.log("Server is up and running on port", process.env.PORT)
  require ("./config/db.config")

})