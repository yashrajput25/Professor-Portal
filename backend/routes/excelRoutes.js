const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const ExcelFile = require("../models/ExcelFiles");
const Video = require("../models/Video");
const authMiddleWare = require("../middleware/auth");
const { uploadExcel,
    getAllFiles, 
    getVideosForFile, 
    getVideoTimestamps,
    linkCourseToExcel,
    markVideoAsShared } = require("../controllers/excelController");

// ########################## ROUTES FOR COURSE CREATION #################################################


const router = express.Router();

const upload = multer({dest:"uploads/"})

router.post("/upload-excel", authMiddleWare ,upload.single("file"), uploadExcel)

router.get("/files" , authMiddleWare, getAllFiles);


router.get("/files/:fileId/videos", authMiddleWare, getVideosForFile);


router.get("/videos/:videoId", authMiddleWare, getVideoTimestamps);


router.patch("/files/:fileId/course", authMiddleWare, linkCourseToExcel);

router.patch("/video/:videoId/mark-shared", authMiddleWare, markVideoAsShared);


module.exports = router;