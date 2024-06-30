import React from "react";

const Hero = () => {
  return (
    <section className="hero bg-secondary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="title">
              <h1 className="mb-4">LET'S GET MOVING</h1>
            </div>
            <div className="sub-title mb-4">
              <p>Your Journey to Fitness Starts Here</p>
              <p>Unleash Your Potential</p>
            </div>
            <div className="buttons">
              <button className="btn btn-primary mx-2 mr-3">Start Your Journey</button>
              <button className="btn btn-outline-light mx-2">Discover Your Plan</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/img3.jpg" alt="Description of the image" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
