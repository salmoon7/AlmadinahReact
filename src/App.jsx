import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Courses />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
