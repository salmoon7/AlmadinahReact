import React, { useEffect, useRef } from "react";
import "./About.css";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";
import about from "../../assets/about.png";

const About = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <h2>About Al-Madinah College</h2>
      <div className="about-info">
        <div
          className="card"
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
        >
          <img src={about} alt="" className="about-img" />
          <p>
            Al Madinah College is a secondary school dedicated to providing a
            robust education in both Islamic and Western disciplines. We have
            consistently been at the forefront of incorporating advanced
            technology into our teaching methods, yielding excellent results.
            Our commitment now is to further enhance our students' skills to
            meet the demands of the 21st century while maintaining a strong
            foundation in both Western and Islamic education.
          </p>
        </div>
        <div
          className="card"
          ref={(el) => {
            cardRefs.current[1] = el;
          }}
        >
          <h3>Our Mission</h3>
          <img src={mission} alt="" className="mission-img" />
          <p>
            To empower students with comprehensive education in both Islamic and
            Western disciplines, integrating innovative technologies to prepare
            them for the future.
          </p>
        </div>
        <div
          className="card"
          ref={(el) => {
            cardRefs.current[2] = el;
          }}
        >
          <h3>Our Vision</h3>
          <img src={vision} alt="" className="vision-img" />
          <p>
            To be a leading secondary school recognized for excellence in both
            Islamic and Western education, utilizing advanced technology to
            promote academic and personal development, and preparing students
            for success in both this life and the hereafter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
