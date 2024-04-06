import React from "react";
import Row from "./Row";

const Inputs = () => {
  const [rowNum, setRowNum] = React.useState([<Row />]);

  return (
    <div className="input-div">
      <h2>Grade type Percentage</h2>
      {rowNum}
      <div className="input-div--extra">
        <p>
          {" "}
          Find additional grade needed to get average grade of (assumes weights
          in %)
          <br />
          <span className="boldText">Optional</span>
        </p>
        <span>
          <input
            className="addtionalGrade"
            placeholder="80"
            type="number"
          ></input>
          %
        </span>
      </div>
    </div>
  );
};

export default Inputs;
