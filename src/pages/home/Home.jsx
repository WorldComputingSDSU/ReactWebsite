import React from "react";
import "./home.css";
import wco from "../../assets/wco.png";

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={wco}
        alt="World Computing Organization Logo"
        className="home-logo"
      />
      <h1 className="home-title">World Computing Organization</h1>
      <p className="home-description">
        We unite Computer Science and Business majors to collaborate on
        innovative projects, host career-focused workshops, and help each other
        succeed in the ever-evolving tech industry.
      </p>
      <button class="ui-btn">
        <span>Join Now</span>
      </button>
    </div>
  );
};

export default Home;
