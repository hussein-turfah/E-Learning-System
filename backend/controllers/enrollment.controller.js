const Enrollment = require("../models/enrollmentModel")
const User = require("../models/userModel")
const Course = require("../models/courseModel"); 


exports.enroll = async (req,res)=>{

  const{courseId, userId} = req.body;
  const course = await Course.findById(courseId);
  const user = await User.findById(userId);
  
  if(!course||!user) return res.status(404).json({message:"Course and/or User not found!"})
  
  const user_enroll = await Enrollment.findOne({userId, courseId })  
  if(user_enroll) return res.status(409).json({message:"User is already enrolled in this course!"})
  

  const enrollment = new Enrollment({
    userId:userId,
    courseId:courseId,
    userEmail: user.email,
    courseCrn: course.crn
  });
  
  await enrollment.save();

  res.status(201).json({message:"Enrolled Successfully"})
}
exports.listEnrolledUsers = async (req, res) => {

  const {courseId} = req.body
  const enrolled_users = await Enrollment.find({courseId});
  const active_users = enrolled_users.filter(Enrollment => Enrollment.status!="dropped")

  res.status(200).json(active_users)
};