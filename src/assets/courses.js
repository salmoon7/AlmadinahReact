import artInt from "./artInt.jpg";
import cyber from "./cyber.jpg";
import webdev from "./webdev.jpg";
import datascience from "./datascience.jpg";

const courses = [
  {
    course_no: 1,
    course_title: "Cyber Security",
    course_image: cyber,
    course_desc:
      "Cybersecurity involves protecting computers, networks, and data from unauthorized access, attacks, or damage. It's like being a digital guardian, ensuring the safety and privacy of online information...",
    videoId: "inWWhr5tnEA",
  },
  {
    course_title: "Web Development",
    course_no: 2,
    course_image: webdev,
    course_desc:
      "Web design involves creating visually appealing and user-friendly websites. It blends creativity with technology to build websites that look good and function well...",
    videoId: "Ok3gZKXmr50",
  },
  {
    course_title: "Artificial Intelligence",
    course_no: 3,
    course_image: artInt,
    course_desc:
      "Artificial Intelligence involves creating systems that can perform tasks that typically require human intelligence, such as understanding natural language, recognizing patterns, and making decisions...",
    videoId: "4jmsHaJ7xEA",
  },
  {
    course_title: "Data Science",
    course_no: 4,
    course_image: datascience,
    course_desc:
      "Data Science involves analyzing and interpreting complex data to help make better decisions. It combines skills in programming, statistics...",
    videoId: "KdgQvgE3ji4",
  },
];
export default courses;
