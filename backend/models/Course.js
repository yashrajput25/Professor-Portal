    const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    studentPortalCourseId: {
    type: mongoose.Schema.Types.ObjectId,  // This stores the real courseId from Student Portal
    required: true,
    ref: "RemoteCourse"  // optional alias
    },
    title: {
    type: String,
    required: true,
    trim: true
    },
    createdAt: {
    type: Date,
    default: Date.now
    }
    });

module.exports = mongoose.model("Course", CourseSchema);
