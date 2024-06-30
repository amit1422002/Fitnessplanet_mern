import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>TOP WORKOUT SESSION</h1>
            <img src="/img5.jpg" className="img-fluid" alt="workout" />
          </div>
          <div className="col-md-6">
            <h1>FEATURED BOOTCAMPS</h1>
            <p>
              Join us for an invigorating workout session designed to push your
              limits and maximize your fitness goals. Our top workout session
              combines high-intensity interval training with cutting-edge
              technology to monitor your performance in real-time. Burn
              calories, boost your heart rate, and enhance your endurance with
              our expertly crafted workout routines. Whether you're a beginner
              or a seasoned athlete, our sessions are tailored to help you
              achieve your personal best. Come and experience a workout like
              never before!

            </p>
            <div className="col-md-12 mt-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Flexibility and Core Stability</h4>
                <p className="card-text">
                  Enhance your flexibility and strengthen your core with our
                  specialized bootcamp. This program focuses on stretching, core
                  exercises, and balance training to improve your overall
                  mobility and stability. Ideal for those looking to prevent
                  injuries and maintain a healthy, active lifestyle.
                </p>
              </div>
            </div>
            <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">HIIT Bootcamp</h4>
                <p className="card-text">
                  Experience the power of High-Intensity Interval Training
                  (HIIT) with our intense bootcamp session. This program
                  alternates between short bursts of intense activity and
                  periods of rest or lower-intensity exercises. Perfect for
                  those who want to burn fat and improve their aerobic 
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Ultimate Cardio Blast</h4>
                <p className="card-text">
                  Jumpstart your fitness journey with our Ultimate Cardio Blast
                  bootcamp. This high-energy program focuses on cardiovascular
                  exercises that will get your heart pumping and calories
                  burning. Perfect for those looking to improve their
                  cardiovascular health and shed some pounds.
                </p>
              </div>
            </div>
          </div>
         
        </div>
          </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default WorkoutSessions;
