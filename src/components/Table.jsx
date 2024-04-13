import React from "react";
import Row from "./Row";

const Table = (props) => {
  const [rows, setRows] = React.useState([
    { key: 0, grade: "", assignment: "", weight: "" },
    { key: 1, grade: "", assignment: "", weight: "" },
    { key: 2, grade: "", assignment: "", weight: "" },
  ]);
  let keyCounter = 3; // Initialize a counter variable

  const [totalGrade, setTotalGrade] = React.useState(0);
  const [totalWeight, setTotalWeight] = React.useState(0);

  function handleCalculation() {
    let gradeSum = 0;
    let weightSum = 0;

    rows.forEach(({ grade, weight }) => {
      // Parse grade and weight as numbers
      const numericGrade = parseFloat(grade);
      const numericWeight = parseFloat(weight);

      // Check if both grade and weight are valid numbers
      if (!isNaN(numericGrade) && !isNaN(numericWeight)) {
        // Add the contribution of this assignment to the total
        gradeSum += numericGrade * numericWeight;
        weightSum += numericWeight;
      }
    });

    let finalAvg = gradeSum / weightSum;

    setTotalGrade(finalAvg);
    setTotalWeight(weightSum);

    props.updateGrades(rows);
  }

  function addRow() {
    setRows((prev) => [...prev, <Table key={keyCounter++} />]); // Increment the counter after using it
  }
  function deleteRow() {
    setRows((prev) => {
      const updatedRows = [...prev];
      updatedRows.pop();
      return updatedRows;
    });
  }

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    setRows((prev) => {
      const updatedRows = [...prev];
      updatedRows[index] = { ...updatedRows[index], [name]: value };

      // props.updateGrades(updatedRows);
      return updatedRows;
    });
  };

  return (
    <section className="Row--inputs">
      <table>
        <thead>
          <tr>
            <th>Assignment (optional) </th>
            <th>Grade %</th>
            <th>Weight %</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ key, grade, assignment, weight }, index) => (
            <Row
              key={key}
              grade={grade}
              assignment={assignment}
              weight={weight}
              handleInputChange={(e) => handleInputChange(index, e)}
            />
          ))}
        </tbody>
      </table>
      <button className="addRow" onClick={addRow}>
        + Add row
      </button>
      <button className="addRow" onClick={deleteRow}>
        Delete Row
      </button>
      <button className="calculate" onClick={handleCalculation}>
        Calculate
      </button>
    </section>
  );
};

export default Table;
