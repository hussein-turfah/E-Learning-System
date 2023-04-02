const mongoose = require ("mongoose")

const courseSchema = new mongoose.Schema({
  Name:{
    type: String,
    required: true,
    unique: true
  },CRN:{
    type: Number,
    required: true,
    unique: true
  },description:{
    type: String,
    required: true,
  },picture:{
    type: String
  }
})


const Course = mongoose.model("Course",courseSchema)
module.exports = Course;