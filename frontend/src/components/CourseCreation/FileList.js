// components/FileList.js
import React from "react";
import "./FileList.css";

export default function FileList({ files, onSelectFile, onCreateCourse }) {
return (
<div className="file-list-container">
    <h2>📁 Uploaded Courses / Excel Files</h2>
    {files.length === 0 ? (
    <p className="no-files">No files uploaded yet.</p>
    ) : (
    <div className="file-grid">
        {files.map((file) => (
        <div
            key={file._id}
            className="file-card"
            onClick={() => onSelectFile(file)}
        >
            <div className="file-icon">📄</div>
            <div className="file-details">
            <div className="file-name" title={file.filename}>{file.filename}</div>
            <button
                className="create-course-btn"
                onClick={(e) => {
                e.stopPropagation();
                if (!file.courseId) {
                    onSelectFile(file); // optional, if needed
                    onCreateCourse();
                }
                }}
                disabled={!!file.courseId}
            >
                {file.courseId ? "✅ Course Created" : "➕ Create Course"}

            </button>
            </div>
        </div>
        ))}
    </div>
    )}
</div>
);
}
