import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight, and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advice from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have normal weight. Maintain a healthy lifestyle.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You are overweight. Consider seeking advice from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist."
      );
    }
  };

  return (
    <section className="bmi py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4">BMI CALCULATOR</h1>
            <form onSubmit={calculateBMI}>
              <div className="form-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  className="form-control"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  className="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  className="form-control"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Calculate BMI
              </button>
            </form>
            {bmi && (
              <div className="mt-4">
                <h3>Your BMI: {bmi}</h3>
              </div>
            )}
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <img
              src="/bmi.jpg"
              alt="BMI"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
