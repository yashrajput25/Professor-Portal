import axios from "axios";

const STUDENT_PORTAL_API = "http://localhost:3000/api";
const STUDENT_PORTAL_API_KEY = process.env.REACT_APP_STUDENT_PORTAL_API_KEY;

console.log("📦 Loaded API KEY from env:", STUDENT_PORTAL_API_KEY);

export function professorHeaders() {
    return {
      headers: {
        "x-api-key": STUDENT_PORTAL_API_KEY
      }
    };
  }
  
  // Create course securely
  export const createCourseInStudentPortal = async ({ title, description }) => {
    return await axios.post(
      `${STUDENT_PORTAL_API}/course`,
      { title, description, status: "upcoming" },
      professorHeaders()
    );
  };