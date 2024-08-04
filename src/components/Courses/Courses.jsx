import React from "react";
import "./Courses.css";
import courses from "../../assets/courses";

import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div id="courses" className="courses">
      <h1> Courses</h1>
      <div className="courses-container">
        {courses.map((course, index) => {
          return (
            <div
              className="background"
              style={{ backgroundImage: `url(${course.course_image})` }}
              key={index}
            >
              <div className="content">
                <h1>{course.course_title}</h1>
                <p>{course.course_desc}</p>

                <Link to={`/courses/${course.course_no}`} className="read-more">
                  More Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
