const mongoose = require("mongoose")

const ExcelFileSchema = new mongoose.Schema({
    filename : {type: String, required: true },
    path: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      courseId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Course",
      }
})

module.exports = mongoose.model("Excelfile", ExcelFileSchema)