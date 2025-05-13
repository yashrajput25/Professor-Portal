import { useState, useEffect } from "react";
import { uploadExcelFile, getUploadedFiles, getVideosFromFile, getVideoTimestamps } from "../api";
import axios from "axios";
import { professorHeaders } from "../StudentPortalAPI"; 
import { createCourseInStudentPortal } from "../StudentPortalAPI";
import { authHeaders } from "../api"
import FileUploader from "./FileUploader";
import FileList from "./FileList";
import VideoList from "./VideoList";
import ClipViewer from "./ClipViewer";

export default function CourseCreation() {
  const [files, setFiles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lectureNumber, setLectureNumber] = useState(1);


  useEffect(() => {
    fetchFiles();
  }, []);

  const handleCreateCourse = async () => {
    const title = prompt("Enter course title:");
    if (!title) return;
  
    const description = prompt("Optional: Add course description") || "";
  
    if (!selectedFile || !selectedFile._id) {
      alert("❌ No Excel file selected. Please click on a file first.");
      return;
    }
  
    try {
      const res = await createCourseInStudentPortal({ title, description });
      console.log("🚀 Full response from createCourseInStudentPortal:", res.data);
  
      const courseId = res.data.courseId;
      alert(`✅ Course created successfully! Course ID: ${courseId}`);
  
      await axios.patch(
        `http://localhost:5001/api/files/${selectedFile._id}/course`,
        { courseId },
        authHeaders()
      );
  
      alert("✅ Course created and linked to Excel file!");
    } catch (error) {
      console.error("❌ Error creating course:", error.response?.data || error.message);
      alert("Failed to create course. See console.");
    }
  };
  
  

  const handleSendToLecture = async (video, lectureNum) => {
    const courseId = selectedFile?.courseId;
    if (!courseId) {
      alert("❌ This Excel file is not linked to a course. Please create a course first.");
      return;
    }
  
    try {
      for (let i = 0; i < timestamps.length; i++) {
        const clip = timestamps[i];
  
        const payload = {
          title: clip.title,
          description: "Generated via YouTube Splitter", // optional
          lectureNumber: lectureNum,
          videoNumber: i + 1,
          url: video.youtubeurl,
        };
  
        await axios.post(
          `http://localhost:3000/api/video/${courseId}`,
          payload,
          professorHeaders() // if required by Student Portal
        );
      }
  
      alert("✅ All mini-clips sent to Student Portal!");
    } catch (error) {
      console.error("❌ Error sending videos:", error);
      alert("❌ Failed to share clips. Check console for details.");
    }
  };
  


  // ##################################### COURSE CREATION ####################################

  // 📂 Fetch uploaded Excel files
  const fetchFiles = async () => {
    try {
      const response = await getUploadedFiles();
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // 📤 Upload a new Excel file
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      await uploadExcelFile(file);
      alert("✅ File uploaded successfully!");
      fetchFiles(); // Refresh file list
    } catch (error) {
      alert("❌ Error uploading file.");
      console.error("Upload error:", error);
    }
  };

  // 📺 Fetch videos from a selected file
  const fetchVideos = async (file) => {
    setSelectedFile(file);
    setSelectedVideo(null);
    setTimestamps([]);
    try {
      const response = await getVideosFromFile(file._id);
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // 🎬 Fetch timestamps from a selected video
  const fetchTimestamps = async (video) => {
    setSelectedVideo(video);
    try {
      console.log("📺 Fetching timestamps for video ID:", video._id);
      console.log("🔐 User token:", localStorage.getItem("token"));
      const response = await getVideoTimestamps(video._id);
      setTimestamps(response.data);
    } catch (error) {
      console.error("Error fetching timestamps:", error);
    }
  };

  return (
    <div>
      <h1>Course creation</h1>

      <FileUploader onUpload={handleUpload}/>

      {/* File List */}

      <FileList
      files = {files}
      onSelectFile = {fetchVideos}
      onCreateCourse = {handleCreateCourse}
      />

      {/* Video List */}

      {selectedFile &&
      (<VideoList
      videos={videos}
      fileName={selectedFile.filename}
      onSelectVideo={fetchTimestamps}
      />)
      }

      {/* Mini-Clips */}
      {selectedVideo && (
        <> <ClipViewer
          selectedVideo={selectedVideo}
          timestamps={timestamps}
          lectureNumber={lectureNumber}
          setLectureNumber={setLectureNumber}
          onSend={handleSendToLecture}
        />
        </>
      )}
    </div>
  );
}
