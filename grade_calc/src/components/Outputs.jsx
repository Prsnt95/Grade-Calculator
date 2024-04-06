import React from "react";

const Outputs = () => {
  const grade = 90;
  const totalWeight = 90;
  const neededRemaining = 90;
  const remainingWeight = 10;

  return (
    <section className="outputs">
      <h3>Your Grades</h3>
      <p className="outputs--element">
        Average Grade: <span style={{ fontWeight: "bold" }}>{grade} %</span>
      </p>
      <p className="outputs--element">
        Total Weight:{" "}
        <span style={{ fontWeight: "bold" }}>{totalWeight} %</span>
      </p>
      {/* <p className="outputs--element">
        {" "}
        Additional Grade needed:{" "}
        <span style={{ fontWeight: "bold" }}>{neededRemaining} %</span>{" "}
      </p> */}
    </section>
  );
};

export default Outputs;
