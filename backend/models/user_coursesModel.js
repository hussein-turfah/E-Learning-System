const mongoose = require ("mongoose");
const User = require("./userModel");
const Course = require("./courseModel")


const user_coursesSchema = new mongoose.Schema({
  user_id_test:[User],
  course_id_test:[Course]
})

const User_Courses = mongoose.model("User_Courses",user_coursesSchema)
module.exports = User_Courses;