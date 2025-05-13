// Update 1

// import React, { useEffect, useState } from "react";
// import "./professor_dashboard.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
//   const [name, setName] = useState("Professor");
//   const [email, setEmail] = useState("example@gmail.com");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5001/api/auth/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const userEmail = res.data.email;
//         const derivedName = userEmail.split("@")[0];
//         setName(derivedName);
//         setEmail(userEmail);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   return (
//     <>
//       <header>
//         <div>E-Learning - Professor Dashboard</div>
//         <nav>
//           <a href="/dashboard">Dashboard</a>
//           <a href="/courses">My Courses</a>
//           <a href="/leaderboard">Leaderboard</a>
//           <a href="/login">Logout</a>
//         </nav>
//       </header>

//       <div className="container">
//         <div className="profile">
//           <img
//             src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
//             alt="Profile"
//           />
//           <div className="profile-info">
//             <h2>{name}</h2>
//             <p>Email: {email}</p>
//             <p>Courses Taught: 2</p>
//           </div>
//         </div>

//         <div className="actions">
//           <button onClick={() => navigate("/course")}>Add New Course</button>
//           <button onClick={() => window.location.href = "/Shared_message/index.html"}>
//             Shared comments
//           </button>
//           <button onClick={() => navigate("/leaderboard")}>
//             View Leaderboard
//           </button>
//         </div>

//         <div className="courses">
//           <h2>Your Courses</h2>

//           <div className="course-item">
//             <div className="course-details">
//               <h3>Digital VLSI and Memory Design</h3>
//               <span>Students Enrolled: 331</span>
//             </div>
//             <div className="manage-buttons">
//               <button onClick={() => navigate("/manage/1")}>Manage</button>
//               <button onClick={() => alert("Delete Course")}>Delete</button>
//             </div>
//           </div>

//           <div className="course-item">
//             <div className="course-details">
//               <h3>Memory Design and Test</h3>
//               <span>Students Enrolled: 184</span>
//             </div>
//             <div className="manage-buttons">
//               <button onClick={() => navigate("/manage/2")}>Manage</button>
//               <button onClick={() => alert("Delete Course")}>Delete</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

//Update 2 (Final and optimized working)

// import React, { useEffect, useState } from "react";
// import "./professor_dashboard.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
//   const [name, setName] = useState("Professor");
//   const [email, setEmail] = useState("example@gmail.com");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5001/api/auth/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const userEmail = res.data.email;
//         const derivedName = userEmail.split("@")[0];
//         setName(derivedName);
//         setEmail(userEmail);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   return (
//     <>
//       <header>
//         <div>E-Learning - Professor Dashboard</div>
//         <nav>
//           <a href="/dashboard">Dashboard</a>
//           <a href="/courses">My Courses</a>
//           <a href="/leaderboard">Leaderboard</a>
//           <a href="/login">Logout</a>
//         </nav>
//       </header>

//       <div className="container">
//         <div className="profile">
//           <img
//             src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
//             alt="Profile"
//           />
//           <div className="profile-info">
//             <h2>{name}</h2>
//             <p>Email: {email}</p>
//             <p>Courses Taught: 2</p>
//           </div>
//         </div>

//         <div className="actions">
//           <button onClick={() => navigate("/course")}>Add New Course</button>
//           <button onClick={() => window.location.href = "/Shared_message/index.html"}>
//             Shared comments
//           </button>
//           <button onClick={() => navigate("/leaderboard")}>
//             View Leaderboard
//           </button>
//         </div>

//         <div className="courses">
//           <h2>Your Courses</h2>

//           <div className="course-item">
//             <div className="course-details">
//               <h3>Digital VLSI and Memory Design</h3>
//               <span>Students Enrolled: 331</span>
//             </div>
//             <div className="manage-buttons">
//               <button onClick={() => navigate("/manage/1")}>Manage</button>
//               <button onClick={() => alert("Delete Course")}>Delete</button>
//             </div>
//           </div>

//           <div className="course-item">
//             <div className="course-details">
//               <h3>Memory Design and Test</h3>
//               <span>Students Enrolled: 184</span>
//             </div>
//             <div className="manage-buttons">
//               <button onClick={() => navigate("/manage/2")}>Manage</button>
//               <button onClick={() => alert("Delete Course")}>Delete</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

//Original code -
//Nimish changed this code, let the following code stay in the comments.
// import React, { useEffect, useState } from "react";
// import "./professor_dashboard.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
//   const [name, setName] = useState("Professor");
//   const [email, setEmail] = useState("example@gmail.com");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5001/api/auth/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const userEmail = res.data.email;
//         const derivedName = userEmail.split("@")[0];
//         setName(derivedName);
//         setEmail(userEmail);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   return (
//     <>
//       <header>
//         <div>E-Learning - Professor Dashboard</div>
//         <nav>
//           <a href="/dashboard">Dashboard</a>
//           <a href="/courses">My Courses</a>
//           <a href="/leaderboard">Leaderboard</a>
//         </nav>
//       </header>

//       <div className="container">
//         <div className="profile">
//           <img
//             src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
//             alt="Profile"
//           />
//           <div className="profile-info">
//             <h2>{name}</h2>
//             <p>Email: {email}</p>
//             <p>Courses Taught: 2</p>
//           </div>
//         </div>

//         <div className="actions">
//           <button onClick={() => navigate("/course")}>Add New Course</button>
//           <button onClick={() => window.location.href = "/Shared_message/index.html"}>
//             Shared comments
//           </button>
//           <button onClick={() => navigate("/leaderboard")}>
//             View Leaderboard
//           </button>
//         </div>

//         <div className="courses">
//           <h2>Your Courses</h2>

//           <div className="course-item">
//             <div className="course-details">
//               <h3>Digital VLSI and Memory Design</h3>
//               <span>Students Enrolled: 331</span>
//             </div>
//             <div className="manage-buttons">
//               <button onClick={() => navigate("/manage/1")}>Manage</button>
//               <button onClick={() => alert("Delete Course")}>Delete</button>
//             </div>
//           </div>

//           <div className="course-item">
//             <div className="course-details">
//               <h3>Memory Design and Test</h3>
//               <span>Students Enrolled: 184</span>
//             </div>
//             <div className="manage-buttons">
//               <button onClick={() => navigate("/manage/2")}>Manage</button>
//               <button onClick={() => alert("Delete Course")}>Delete</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



//Other team's work
// import React, { useEffect, useState } from "react";
// import "./professor_dashboard.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// export default function Dashboard() {
//   const [name, setName] = useState("Professor");
//   const [email, setEmail] = useState("example@gmail.com");
//   const navigate = useNavigate();

//   const [notifications, setNotifications] = useState([
//     { message: "Rohan: sir accept the new changes", read: false },
//     { message: "Anshul: Notes uploaded", read: true },
//     { message: "Rohan: sir accept the new changes", read: false },
//     { message: "Rohan: sir accept the new changes", read: true },
//     { message: "Rohan: sir accept the new changes", read: false },
//   ]);

//   const [searchNotif, setSearchNotif] = useState("");

//   // Filter notifications based on search
//   const filteredNotifs = notifications.filter((n) =>
//     n.message.toLowerCase().includes(searchNotif.toLowerCase())
//   );

//   // Toggle read/unread
//   const toggleRead = (index) => {
//     setNotifications((prev) =>
//       prev.map((notif, idx) =>
//         idx === index ? { ...notif, read: !notif.read } : notif
//       )
//     );
//   };

//   // Clear all
//   const clearNotifications = () => {
//     setNotifications([]);
//   };

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5001/api/auth/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const userEmail = res.data.email;
//         const derivedName = userEmail.split("@")[0];
//         setName(derivedName);
//         setEmail(userEmail);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const courses = [
//     {
//       title: "Digital VLSI and Memory Design",
//       enrolled: 331,
//       completion: 58,
//       due: 28,
//       notEnrolled: 14,
//     },
//     {
//       title: "Memory Design and Test",
//       enrolled: 184,
//       completion: 72,
//       due: 20,
//       notEnrolled: 8,
//     },
//   ];

//   const [selectedCourse, setSelectedCourse] = useState(courses[0]);
//   const studentList = [
//     "Kshitija Randive",
//     "Diksha Kumari Pareta",
//     "Abhishek Gond",
//     "Nimish Goyal",
//     "Yash Rajput",
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredStudents = studentList.filter((student) =>
//     student.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="dashboard-wrapper">
//       <header>
//         <div className="logo">Cognitrix</div>
//         <nav>
//           <a href="/dashboard">Home</a>
//           <a href="/leaderboard">Leaderboard</a>
//           <a href="/login">Logout</a>
//         </nav>
//       </header>

//       <div className="top-section">
//         <div className="professor-card">
//           <div className="prof-img"></div>
//           <div className="prof-info">
//             <div className="prof-name">Hi, {name}</div>
//             <div className="prof-email">{email}</div>
//           </div>
//           <div className="left-actions">
//             <button onClick={() => navigate("/course")}>Add Courses</button>
//             <button>Announcement</button>
//             <button
//               onClick={() =>
//                 (window.location.href = "/Shared_message/index.html")
//               }
//             >
//               Shared Comments
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="mid-section">
//         <div className="course-progress-wrapper">
//           {/* Courses Added Section */}
//           <div className="course-section-wrapper">
//             <h2 className="section-heading">Courses Added</h2>
//             <div className="course-section">
//               <div className="courses-wrapper">
//                 <div className="courses-box">
//                   {courses.map((course, index) => (
//                     <div
//                       key={index}
//                       className={`course-card ${
//                         selectedCourse.title === course.title ? "active" : ""
//                       }`}
//                       onClick={() => setSelectedCourse(course)}
//                     >
//                       <h3>{course.title}</h3>
//                       <p>{name}</p>
//                       <button onClick={(e) => e.stopPropagation()}>
//                         Remove
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="see-all">
//                   <button onClick={() => navigate("/course")}>
//                     See All Courses →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Course Completion Section */}
//           <div className="course-completion-wrapper">
//             <h2 className="section-heading">Course Completion</h2>
//             <div className="progress-box">
//               <div className="progress-ring">
//                 <svg>
//                   <circle className="circle-bg" cx="80" cy="80" r="62" />
//                   <circle
//                     className="circle"
//                     cx="80"
//                     cy="80"
//                     r="62"
//                     strokeDasharray={`${selectedCourse.completion * 3.9}, 390`}
//                   />
//                 </svg>
//                 {/* <div className="progress-label">
//                   {selectedCourse.completion}%<br />
//                   Completed
//                 </div> */}
//               </div>
//               <div className="legend">
//                 <div>
//                   <span className="dot completed"></span>
//                   {selectedCourse.completion}% Completed
//                 </div>
//                 <div>
//                   <span className="dot due"></span>
//                   {selectedCourse.due}% Due
//                 </div>
//                 <div>
//                   <span className="dot not-enrolled"></span>
//                   {selectedCourse.notEnrolled}% Not Enrolled
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bottom-section">
//         {/* Enrolled Students Section */}
//         <div className="students-section">
//           <h2 className="section-heading">Enrolled Student List</h2>
//           <div className="students-box">
//             <div className="student-label-row">
//               <span>Student Name</span>
//               <input
//                 type="text"
//                 className="search-bar-top"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             <ul>
//               {filteredStudents.map((student, idx) => (
//                 <li key={idx}>
//                   <span className="student-name">{student}</span>
//                   <button
//                     className="see-graph-btn"
//                     onClick={() => navigate("/dashboard")} // Replace with actual graph page
//                   >
//                     See Knowledge Graph
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Notifications Section */}
//         <div className="notifications-section">
//           <div className="section-header">
//             <h2 className="section-heading">
//               Notifications{" "}
//               <span className="notif-count">{notifications.length}</span>
//             </h2>
//             <button className="clear-btn" onClick={clearNotifications}>
//               Clear All
//             </button>
//           </div>

//           <div className="notifications-box">
//             <ul>
//               {filteredNotifs.length > 0 ? (
//                 filteredNotifs.map((notif, idx) => (
//                   <li
//                     key={idx}
//                     className={notif.read ? "" : "highlight"}
//                     onClick={() => toggleRead(idx)}
//                   >
//                     {notif.message}
//                   </li>
//                 ))
//               ) : (
//                 <li style={{ color: "var(--dark)" }}>No notifications found</li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



//Other team's code
// import React, { useEffect, useState } from "react";
// import "./professor_dashboard.css";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const [name, setName] = useState("Professor");
//   const [email, setEmail] = useState("example@gmail.com");
//   const navigate = useNavigate();

//   const [notifications, setNotifications] = useState([
//     { message: "Rohan: sir accept the new changes", read: false },
//     { message: "Anshul: Notes uploaded", read: true },
//     { message: "Rohan: sir accept the new changes", read: false },
//     { message: "Rohan: sir accept the new changes", read: true },
//     { message: "Rohan: sir accept the new changes", read: false },
//   ]);

//   const [searchNotif, setSearchNotif] = useState("");

//   const filteredNotifs = notifications.filter((n) =>
//     n.message.toLowerCase().includes(searchNotif.toLowerCase())
//   );

//   const toggleRead = (index) => {
//     setNotifications((prev) =>
//       prev.map((notif, idx) =>
//         idx === index ? { ...notif, read: !notif.read } : notif
//       )
//     );
//   };

//   const clearNotifications = () => {
//     setNotifications([]);
//   };

//   const [courses, setCourses] = useState([
//     {
//       id: "1",
//       name: "Digital VLSI and Memory Design",
//       studentsEnrolled: 331,
//       completion: 58,
//       due: 28,
//       notEnrolled: 14,
//     },
//     {
//       id: "2",
//       name: "Memory Design and Test",
//       studentsEnrolled: 184,
//       completion: 72,
//       due: 20,
//       notEnrolled: 8,
//     },
//   ]);

//   const [selectedCourse, setSelectedCourse] = useState(courses[0]);

//   const handleDelete = (courseId) => {
//     if (window.confirm("Delete this course?")) {
//       alert("Course deleted (simulated — not connected to DB yet).");
//       setCourses((prevCourses) =>
//         prevCourses.filter((course) => course.id !== courseId)
//       );
//     }
//   };

//   const studentList = [
//     "Kshitija Randive",
//     "Diksha Kumari Pareta",
//     "Abhishek Gond",
//     "Nimish Goyal",
//     "Yash Rajput",
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredStudents = studentList.filter((student) =>
//     student.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userEmail = localStorage.getItem("email");
//     if (!token || !userEmail) {
//       navigate("/login");
//     } else {
//       const derivedName = userEmail.split("@")[0];
//       setName(derivedName);
//       setEmail(userEmail);
//     }
//   }, [navigate]);

//   return (
//     <div className="dashboard-wrapper">
//       <header>
//         <div className="logo">Cognitrix</div>
//         <nav>
//           <a href="/dashboard">Home</a>
//           <a href="/leaderboard">Leaderboard</a>
//           <a href="/login" onClick={() => localStorage.clear()}>
//             Logout
//           </a>
//         </nav>
//       </header>

//       <div className="top-section">
//         <div className="professor-card">
//           <div className="prof-img"></div>
//           <div className="prof-info">
//             <div className="prof-name">Hi, {name}</div>
//             <div className="prof-email">{email}</div>
//           </div>
//           <div className="left-actions">
//             <button onClick={() => navigate("/course")}>Add Courses</button>
//             <button>Announcement</button>
//             <button
//               onClick={() =>
//                 (window.location.href = "/Shared_message/index.html")
//               }
//             >
//               Shared Comments
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="mid-section">
//         <div className="course-progress-wrapper">
//           {/* Courses Added Section */}
//           <div className="course-section-wrapper">
//             <h2 className="section-heading">Courses Added</h2>
//             <div className="course-section">
//               <div className="courses-wrapper">
//                 <div className="courses-box">
//                   {courses.map((course) => (
//                     <div
//                       key={course.id}
//                       className={`course-card ${
//                         selectedCourse.id === course.id ? "active" : ""
//                       }`}
//                       onClick={() => setSelectedCourse(course)}
//                     >
//                       <h3>{course.name}</h3>
//                       <p>{name}</p>
//                       <div className="card-buttons">
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             navigate(`/manage/${course.id}`);
//                           }}
//                         >
//                           Manage
//                         </button>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleDelete(course.id);
//                           }}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="see-all">
//                   <button onClick={() => navigate("/course")}>
//                     See All Courses →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Course Completion Section */}
//           <div className="course-completion-wrapper">
//             <h2 className="section-heading">Course Completion</h2>
//             <div className="progress-box">
//               <div className="progress-ring">
//                 <svg>
//                   <circle className="circle-bg" cx="80" cy="80" r="62" />
//                   <circle
//                     className="circle"
//                     cx="80"
//                     cy="80"
//                     r="62"
//                     strokeDasharray={`${selectedCourse.completion * 3.9}, 390`}
//                   />
//                 </svg>
//               </div>
//               <div className="legend">
//                 <div>
//                   <span className="dot completed"></span>
//                   {selectedCourse.completion}% Completed
//                 </div>
//                 <div>
//                   <span className="dot due"></span>
//                   {selectedCourse.due}% Due
//                 </div>
//                 <div>
//                   <span className="dot not-enrolled"></span>
//                   {selectedCourse.notEnrolled}% Not Enrolled
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bottom-section">
//         {/* Enrolled Students Section */}
//         <div className="students-section">
//           <h2 className="section-heading">Enrolled Student List</h2>
//           <div className="students-box">
//             <div className="student-label-row">
//               <span>Student Name</span>
//               <input
//                 type="text"
//                 className="search-bar-top"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             <ul>
//               {filteredStudents.map((student, idx) => (
//                 <li key={idx}>
//                   <span className="student-name">{student}</span>
//                   <button
//                     className="see-graph-btn"
//                     onClick={() => navigate("/dashboard")}
//                   >
//                     See Knowledge Graph
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Notifications Section */}
//         <div className="notifications-section">
//           <div className="section-header">
//             <h2 className="section-heading">
//               Notifications{" "}
//               <span className="notif-count">{notifications.length}</span>
//             </h2>
//             <button className="clear-btn" onClick={clearNotifications}>
//               Clear All
//             </button>
//           </div>

//           <div className="notifications-box">
//             <ul>
//               {filteredNotifs.length > 0 ? (
//                 filteredNotifs.map((notif, idx) => (
//                   <li
//                     key={idx}
//                     className={notif.read ? "" : "highlight"}
//                     onClick={() => toggleRead(idx)}
//                   >
//                     {notif.message}
//                   </li>
//                 ))
//               ) : (
//                 <li style={{ color: "var(--dark)" }}>
//                   No notifications found
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./professor_dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [name, setName] = useState("Professor");
  const [email, setEmail] = useState("example@gmail.com");
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    { message: "Rohan: sir accept the new changes", read: false },
    { message: "Anshul: Notes uploaded", read: true },
    { message: "Rohan: sir accept the new changes", read: false },
    { message: "Rohan: sir accept the new changes", read: true },
    { message: "Rohan: sir accept the new changes", read: false },
  ]);

  const [searchNotif, setSearchNotif] = useState("");

  const filteredNotifs = notifications.filter((n) =>
    n.message.toLowerCase().includes(searchNotif.toLowerCase())
  );

  const toggleRead = (index) => {
    setNotifications((prev) =>
      prev.map((notif, idx) =>
        idx === index ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const [courses, setCourses] = useState([
    {
      id: "1",
      name: "Digital VLSI and Memory Design",
      studentsEnrolled: 331,
      completion: 58,
      due: 28,
      notEnrolled: 14,
    },
    {
      id: "2",
      name: "Memory Design and Test",
      studentsEnrolled: 184,
      completion: 72,
      due: 20,
      notEnrolled: 8,
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const handleDelete = (courseId) => {
    if (window.confirm("Delete this course?")) {
      alert("Course deleted (simulated — not connected to DB yet).");
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.id !== courseId)
      );
    }
  };

  const studentList = [
    "Kshitija Randive",
    "Diksha Kumari Pareta",
    "Abhishek Gond",
    "Nimish Goyal",
    "Yash Rajput",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredStudents = studentList.filter((student) =>
    student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("email");
    if (!token || !userEmail) {
      navigate("/login");
    } else {
      const derivedName = userEmail.split("@")[0];
      setName(derivedName);
      setEmail(userEmail);
    }
  }, [navigate]);

  return (
    <div className="dashboard-wrapper">
      <header>
        <div className="logo">Cognitrix</div>
        <nav>
          <a href="/dashboard">Home</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/login" onClick={() => localStorage.clear()}>
            Logout
          </a>
        </nav>
      </header>

      <div className="top-section">
        <div className="professor-card">
          <div className="prof-img"></div>
          <div className="prof-info">
            <div className="prof-name">Hi, {name}</div>
            <div className="prof-email">{email}</div>
          </div>
          <div className="left-actions">
            <button onClick={() => navigate("/course")}>Add Courses</button>
            <button>Announcement</button>
            <button
              onClick={() =>
                (window.location.href = "/Shared_message/index.html")
              }
            >
              Shared Comments
            </button>
          </div>
        </div>
      </div>

      <div className="mid-section">
        <div className="course-progress-wrapper">
          {/* Courses Added Section */}
          <div className="course-section-wrapper">
            <h2 className="section-heading">Courses Added</h2>
            <div className="course-section">
              <div className="courses-wrapper">
                <div className="courses-box">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className={`course-card ${
                        selectedCourse.id === course.id ? "active" : ""
                      }`}
                      onClick={() => setSelectedCourse(course)}
                    >
                      <h3>{course.name}</h3>
                      <p>{name}</p>
                      <div className="card-buttons">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/manage/${course.id}`);
                          }}
                        >
                          Manage
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(course.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="see-all">
                  <button onClick={() => navigate("/course")}>
                    See All Courses →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Course Completion Section */}
          <div className="course-completion-wrapper">
            <h2 className="section-heading">Course Completion</h2>
            <div className="progress-box">
              <div className="progress-ring">
                <svg>
                  <circle className="circle-bg" cx="80" cy="80" r="62" />
                  <circle
                    className="circle"
                    cx="80"
                    cy="80"
                    r="62"
                    strokeDasharray={`${selectedCourse.completion * 3.9}, 390`}
                  />
                </svg>
              </div>
              <div className="legend">
                <div>
                  <span className="dot completed"></span>
                  {selectedCourse.completion}% Completed
                </div>
                <div>
                  <span className="dot due"></span>
                  {selectedCourse.due}% Due
                </div>
                <div>
                  <span className="dot not-enrolled"></span>
                  {selectedCourse.notEnrolled}% Not Enrolled
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        {/* Enrolled Students Section */}
        <div className="students-section">
          <h2 className="section-heading">Enrolled Student List</h2>
          <div className="students-box">
            <div className="student-label-row">
              <span>Student Name</span>
              <input
                type="text"
                className="search-bar-top"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <ul>
              {filteredStudents.map((student, idx) => (
                <li key={idx}>
                  <span className="student-name">{student}</span>
                  <button
                    className="see-graph-btn"
                    onClick={() => navigate("/dashboard")}
                  >
                    See Knowledge Graph
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="notifications-section">
          <div className="section-header">
            <h2 className="section-heading">
              Notifications{" "}
              <span className="notif-count">{notifications.length}</span>
            </h2>
            <button className="clear-btn" onClick={clearNotifications}>
              Clear All
            </button>
          </div>

          <div className="notifications-box">
            <ul>
              {filteredNotifs.length > 0 ? (
                filteredNotifs.map((notif, idx) => (
                  <li
                    key={idx}
                    className={notif.read ? "" : "highlight"}
                    onClick={() => toggleRead(idx)}
                  >
                    {notif.message}
                  </li>
                ))
              ) : (
                <li style={{ color: "var(--dark)" }}>
                  No notifications found
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
