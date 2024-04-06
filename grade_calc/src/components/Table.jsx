import React from "react";

const Table = ({ grade, assignment, weight, handleInputChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="assignment"
          value={assignment}
          onChange={handleInputChange}
          placeholder="e.g Homework"
        />
      </td>
      <td>
        <input
          className="gradeInput"
          type="number"
          name="grade"
          value={grade}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          className="weightInput"
          type="number"
          name="weight"
          value={weight}
          onChange={handleInputChange}
        />
      </td>
    </tr>
  );
};

export default Table;
