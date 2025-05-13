const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const ExcelFile = require("../models/ExcelFiles");
const Video = require("../models/Video");
const authMiddleWare = require("../middleware/auth");


exports.uploadExcel = async (req, res) => {
    console.log("📌 req.user from authMiddleware:", req.user);
    const userId = req.user.id;
    try{
        
        if(!req.file){
            return res.status(400).json({error: "No file upload"});
        }
        const newFile = new ExcelFile({
            filename : req.file.originalname,
            path: req.file.path,
            userId: userId,
        })
        await newFile.save();

        console.log("✅ Excel File Saved:", newFile);


        const workbook = xlsx.readFile(req.file.path);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(sheet, { header : 1 });

        let currentVideoUrl = null;
        let timestamps = [];

        for(let row of data.slice(1)){
            if(row[1] && ( row[1].includes("youtube.com") ||  row[1].includes("youtu.be"))){

                if(currentVideoUrl){
                    console.log(`✅ Saving Video: ${currentVideoUrl} with timestamps:`, timestamps);
                    const newVideo = new Video({
                        excelFileId : newFile._id,
                        youtubeurl : currentVideoUrl,
                        timestamps,
                        userId:userId,
                    });
                    await newVideo.save();
                    // 🔗 Link to Course if courseId is present
                    if (newFile.courseId) {
                        const course = await Course.findById(newFile.courseId);
                        if (course) {
                        course.videos.push(newVideo._id);
                        await course.save();
                        console.log(`🎥 Linked video ${newVideo._id} to course ${course._id}`);
                        }
                    }
  
                }
                currentVideoUrl = row[1];
                timestamps = [];

            }else if(currentVideoUrl && row[2] && row[3]){
                timestamps.push({
                    title: row[1] || "Untitled Segment",
                    startTime:row[2],
                    endTime: row[3]
                })
            }
        }

        if (currentVideoUrl) {
            console.log(`✅ Saving Last Video: ${currentVideoUrl} with timestamps:`, timestamps);
            const newVideo = new Video({
            excelFileId: newFile._id,
            youtubeurl: currentVideoUrl,
            timestamps,
            userId: userId,
            });
            await newVideo.save();
        }
        res.json({ message: "Excel file uploaded and processed" , fileId: newFile._id});
    }catch(error){
        console.error("Upload Error", error);
        res.status(500).json({error:"Internal server error"});
    }
};


exports.getAllFiles = async(req, res)=>{

    try{
        console.log("📡 Fetching uploaded Excel files...")
        const files = await ExcelFile.find({userId: req.user.id});
        console.log("✅ Files found in DB:", files);
        res.json(files);

    }catch(error){
        console.error("❌ Error fetching files:", error);
        res.status(500).json({error: "Database error"});
    }

};


exports.getVideosForFile = async (req, res) => {
    try {
    const videos = await Video.find({ 
        excelFileId: req.params.fileId,
        userId: req.user.id
    });
    res.json(videos);
    } catch (error) {
    res.status(500).json({ error: "Database error" });
    }
};


exports.getVideoTimestamps = async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const userId = req.user.id; // for user isolation
    
        // ✅ Use .findOne with both filters
        console.log("📡 Looking for video:", {
            _id: req.params.videoId,
            userId: req.user.id
        });
        const video = await Video.findOne({ _id: videoId, userId });
    if (!video) return res.status(404).json({ error: "Video not found" });
    res.json(video.timestamps);
    } catch (error) {
        console.error("❌ Error fetching video timestamps:", error);
    res.status(500).json({ error: "Database error" });
    }
};


exports.linkCourseToExcel= async (req, res) => {
try {
    const { courseId } = req.body;

    // Step 1: Fetch all videos linked to this Excel file
    const videos = await Video.find({ excelFileId: req.params.fileId });

    // Step 2: Extract only their IDs
    const videoIds = videos.map(video => video._id);

    // Step 3: Update Course: set courseId and push video IDs
    await ExcelFile.findByIdAndUpdate(req.params.fileId, {
    courseId: courseId,
    });

    await Course.findByIdAndUpdate(courseId, {
    $push: { videos: { $each: videoIds } }
    });

    res.json({ success: true, message: "✅ Course ID linked and videos added to course." });
} catch (err) {
    console.error("❌ Error linking course:", err);
    res.status(500).json({ error: "Database error" });
}
};