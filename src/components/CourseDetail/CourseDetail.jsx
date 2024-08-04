import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../assets/courses";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.course_no.toString() === id);

  return (
    <div className="course-detail">
      {course ? (
        <>
          <h1>{course.course_title}</h1>
          <p>{course.course_desc}</p>
          {/* Add detailed information here */}
          <div className="video-container">
            <iframe
              width="980"
              height="670"
              src={`https://www.youtube.com/embed/${course.videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="course-content"></div>
          <div className="course-text">
            {course.course_title === "Cyber Security" && (
              <>
                <h2>Overview</h2>
                <p>
                  Cybersecurity involves protecting computers, networks, and
                  data from unauthorized access, attacks, or damage. It's like
                  being a digital guardian, ensuring the safety and privacy of
                  online information.
                </p>
                <h2>Problems it Solves</h2>
                <ul>
                  <li>
                    Data Breaches: Preventing hackers from stealing sensitive
                    information.
                  </li>
                  <li>
                    Identity Theft: Protecting individuals' personal information
                    from being misused.
                  </li>
                  <li>
                    Malware Attacks: Stopping malicious software from damaging
                    systems or stealing data.
                  </li>
                  <li>
                    Financial Fraud: Securing online transactions to prevent
                    theft and fraud.
                  </li>
                </ul>
                <h2>Financial Opportunities</h2>
                <ul>
                  <li>
                    High Demand: Businesses, governments, and individuals need
                    cybersecurity professionals to protect their data.
                  </li>
                  <li>
                    Lucrative Salaries: Cybersecurity experts often earn high
                    salaries due to the critical nature of their work.
                  </li>
                  <li>
                    Diverse Roles: Opportunities range from security analysts
                    and ethical hackers to security consultants and chief
                    information security officers (CISOs).
                  </li>
                </ul>
                <h2>Road Map</h2>
                <ul>
                  <li>
                    Basic IT Skills: Learn computer basics and networking.
                  </li>
                  <li>
                    Cybersecurity Fundamentals: Understand security principles
                    and threats.
                  </li>
                  <li>
                    Specialization: Choose an area like ethical hacking, network
                    security, or cryptography.
                  </li>
                  <li>
                    Certifications: Obtain certifications such as CompTIA
                    Security+, Certified Ethical Hacker (CEH), or CISSP.
                  </li>
                  <li>
                    Practical Experience: Gain hands-on experience through
                    internships, labs, and real-world projects.
                  </li>
                </ul>
                <h2>Free Resources</h2>
                <ul>
                  <li>
                    <a href="https://www.cybrary.it/">Cybrary</a>
                  </li>
                  <li>
                    <a href="https://www.khanacademy.org/computing/computer-security">
                      Khan Academy
                    </a>
                  </li>
                  <li>
                    <a href="https://tryhackme.com/">TryHackMe</a>
                  </li>
                  <li>
                    <a href="https://owasp.org/">OWASP</a>
                  </li>
                </ul>
              </>
            )}
            {course.course_title === "Web Development" && (
              <>
                <h2>Overview</h2>
                <p>
                  Web design involves creating visually appealing and
                  user-friendly websites. It blends creativity with technology
                  to build websites that look good and function well.
                </p>
                <h2>Problems it Solves</h2>
                <ul>
                  <li>
                    User Experience: Ensuring websites are easy to navigate and
                    use.
                  </li>
                  <li>
                    Brand Representation: Creating designs that reflect a
                    brand’s identity.
                  </li>
                  <li>
                    Accessibility: Making websites accessible to all users,
                    including those with disabilities.
                  </li>
                  <li>
                    Mobile Responsiveness: Ensuring websites work well on all
                    devices, including smartphones and tablets.
                  </li>
                </ul>
                <h2>Financial Opportunities</h2>
                <ul>
                  <li>
                    Freelancing: Many web designers work independently, offering
                    their services to various clients.
                  </li>
                  <li>
                    Employment: Web designers can work for companies, design
                    agencies, or tech startups.
                  </li>
                  <li>
                    Passive Income: Opportunities to create and sell website
                    templates or run a web design blog.
                  </li>
                </ul>
                <h2>Road Map</h2>
                <ul>
                  <li>
                    Basic Design Principles: Learn about color theory,
                    typography, and layout.
                  </li>
                  <li>Web Technologies: Master HTML, CSS, and JavaScript.</li>
                  <li>
                    Design Tools: Get proficient with tools like Adobe
                    Photoshop, Illustrator, and web design platforms like Figma
                    or Sketch.
                  </li>
                  <li>
                    Responsive Design: Learn how to create websites that work on
                    different devices.
                  </li>
                  <li>
                    Portfolio Development: Build a portfolio of your work to
                    showcase your skills to potential clients or employers.
                  </li>
                </ul>
                <h2>Free Resources</h2>
                <ul>
                  <li>
                    <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
                  </li>
                  <li>
                    <a href="https://www.w3schools.com/">W3Schools</a>
                  </li>
                  <li>
                    <a href="https://www.codecademy.com/">Codecademy</a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn">
                      MDN Web Docs
                    </a>
                  </li>
                </ul>
              </>
            )}
            {course.course_title === "Artificial Intelligence" && (
              <>
                <h2>Overview</h2>
                <p>
                  Artificial Intelligence involves creating systems that can
                  perform tasks that typically require human intelligence, such
                  as understanding natural language, recognizing patterns, and
                  making decisions.
                </p>
                <h2>Problems it Solves</h2>
                <ul>
                  <li>
                    Automation: Automating repetitive tasks to save time and
                    resources.
                  </li>
                  <li>
                    Data Analysis: Analyzing large amounts of data to find
                    patterns and insights.
                  </li>
                  <li>
                    Personalization: Creating personalized experiences in areas
                    like marketing and customer service.
                  </li>
                  <li>
                    Healthcare: Assisting in diagnostics and personalized
                    medicine.
                  </li>
                </ul>
                <h2>Financial Opportunities</h2>
                <ul>
                  <li>
                    High Demand: AI professionals are in demand in various
                    industries, including tech, healthcare, finance, and more.
                  </li>
                  <li>
                    Innovative Roles: Opportunities to work on cutting-edge
                    technologies and innovations.
                  </li>
                  <li>
                    Entrepreneurship: Possibilities to start your own AI-based
                    business or develop AI products.
                  </li>
                </ul>
                <h2>Road Map</h2>
                <ul>
                  <li>
                    Mathematics and Programming: Strengthen your understanding
                    of math (especially algebra and calculus) and learn
                    programming languages like Python.
                  </li>
                  <li>
                    Machine Learning: Study the basics of machine learning
                    algorithms and techniques.
                  </li>
                  <li>
                    Data Science: Learn how to collect, clean, and analyze data.
                  </li>
                  <li>
                    Specialization: Choose an area of interest such as natural
                    language processing, computer vision, or robotics.
                  </li>
                  <li>
                    Projects and Research: Work on AI projects and stay updated
                    with the latest research and developments in the field.
                  </li>
                </ul>
                <h2>Free Resources</h2>
                <ul>
                  <li>
                    <a href="https://www.coursera.org/">Coursera</a>
                  </li>
                  <li>
                    <a href="https://www.edx.org/">edX</a>
                  </li>
                  <li>
                    <a href="https://ai.google/education/">Google AI</a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/learn/overview">Kaggle</a>
                  </li>
                </ul>
              </>
            )}
            {course.course_title === "Data Science" && (
              <>
                <h2>Overview</h2>
                <p>
                  Data Science involves analyzing and interpreting complex data
                  to help make better decisions. It combines skills in
                  programming, statistics, and domain knowledge to extract
                  meaningful insights from data.
                </p>
                <h2>Problems it Solves</h2>
                <ul>
                  <li>
                    Decision Making: Helping businesses and organizations make
                    data-driven decisions.
                  </li>
                  <li>
                    Predictive Analytics: Forecasting future trends and
                    behaviors.
                  </li>
                  <li>
                    Personalization: Enhancing customer experiences by analyzing
                    preferences and behaviors.
                  </li>
                  <li>
                    Healthcare Improvements: Analyzing medical data to improve
                    patient outcomes and optimize treatments.
                  </li>
                </ul>
                <h2>Financial Opportunities</h2>
                <ul>
                  <li>
                    High Demand: Data scientists are in demand in many
                    industries, including tech, finance, healthcare, and retail.
                  </li>
                  <li>
                    Competitive Salaries: Due to the specialized skills
                    required, data scientists often earn high salaries.
                  </li>
                  <li>
                    Diverse Roles: Opportunities range from data analyst and
                    business intelligence analyst to data engineer and machine
                    learning engineer.
                  </li>
                </ul>
                <h2>Road Map</h2>
                <ul>
                  <li>
                    Mathematics and Statistics: Build a strong foundation in
                    statistics and probability.
                  </li>
                  <li>
                    Programming Skills: Learn programming languages commonly
                    used in data science, such as Python and R.
                  </li>
                  <li>
                    Data Manipulation and Visualization: Learn how to collect,
                    clean, and visualize data using tools like pandas, NumPy,
                    and matplotlib.
                  </li>
                  <li>
                    Machine Learning: Understand machine learning algorithms and
                    how to implement them.
                  </li>
                  <li>
                    Practical Experience: Work on real-world projects and gain
                    experience through internships or competitions .
                  </li>
                </ul>
                <h2>Free Resources</h2>
                <ul>
                  <li>
                    <a href="https://www.coursera.org/">Coursera</a>
                  </li>
                  <li>
                    <a href="https://www.edx.org/">edX</a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/learn/overview">Kaggle</a>
                  </li>
                  <li>
                    <a href="https://www.datacamp.com/">DataCamp</a>
                  </li>
                  <li>
                    <a href="https://grow.google/certificates/data-analytics/">
                      Google Data Analytics
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </>
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
};

export default CourseDetail;
