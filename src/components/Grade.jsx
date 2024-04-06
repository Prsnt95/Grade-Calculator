import React from "react";
import Inputs from "./Inputs";
import Outputs from "./Outputs";

const Grade = () => {
  return (
    <section className="grade--section">
      <h1 className="title"> Grade Calculator</h1>

      <div className="interactions">
        <Inputs />
        <Outputs />
      </div>
    </section>
  );
};

export default Grade;
