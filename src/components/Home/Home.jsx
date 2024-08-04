import React from "react";
import "./Home.css";
import Lottie from "lottie-react";
import animation from "../../assets/animation.json";
import arrow from "../../assets/arrow.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  return (
    <div id="home" className="home-section">
      <div className="home-header">
        <h1>Contribute to Technological Discoveries</h1>

        <p>
          Check out comprehensive courses in technology to discover your
          passion. Equip yourself with cutting-edge skills and be at the
          forefront of innovation. Start your journey while still in school and
          become a trailblazer in the tech world.
        </p>
        <div className="cta-button">
          <AnchorLink offset={50} href="#courses" className="anchor">
            Explore Courses
          </AnchorLink>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="home-img">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default Home;
