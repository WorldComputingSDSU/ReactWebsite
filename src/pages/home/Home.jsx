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
        Welcome to the World Computing Organization. Our club is dedicated to
        fostering a community of tech enthusiasts and professionals. Join us to
        learn, share, and grow together in the world of computing.
      </p>
    </div>
  );
};

export default Home;
