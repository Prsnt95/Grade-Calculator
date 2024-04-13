import React from "react";
import Table from "./Table";

const Inputs = ({ updateGrades }) => {
  const [tableData, setTableData] = React.useState();

  return (
    <div className="input-div">
      <h2>Grade type Percentage</h2>
      <Table
        updateGrades={updateGrades}
        tableData={tableData}
        setTableData={setTableData}
      />
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
