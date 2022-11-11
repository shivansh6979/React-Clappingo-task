import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-flex">
        <div className="left">
          {" "}
          <div className="box">
            <span className="number">50K +</span>
            <span className="n-text">Mobile Downloads</span>
          </div>
          <div className="box">
            <span className="number">80K +</span>
            <span className="n-text">Sessions per month</span>
          </div>
        </div>
        <div className="left">
          {" "}
          <div className="box">
            <span className="number">53K +</span>
            <span className="n-text">Happy Learners</span>
          </div>
          <div className="box">
            <span className="number">200 +</span>
            <span className="n-text">Speakers around the globe</span>
          </div>
        </div>
      </div>
      <div className="banner-text">
        <span
          style={{
            textAlign: "left",
            color: "#139980",
            fontSize: "medium",
          }}
        >
          book a trial
        </span>
        <span className="hd">
          Start your English
          <br /> Speaking journey today!
        </span>
        <span style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> elit. Neque pellentesque praesent vitae sit sagittis
          <br /> venenatis.
        </span>
        <button className="book">Book a trial</button>
      </div>
    </div>
  );
};

export default Banner;
