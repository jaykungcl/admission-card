import React from "react";
import { ReactComponent as Math } from "../assets/math.svg";

const Round = ({ roundSeats, score }) => {
  return (
    <div className="round">
      <div className="round-available">
        <h3>รอบที่เปิด</h3>
        {roundSeats.map((seats, index) => (
          <div className={`round-item ${seats !== -1 ? "active" : ""}`}>
            {index + 1}
          </div>
        ))}
      </div>

      <div className="round-current">
        <p>รอบที่ 4: Admission</p>
        <button className="audit-score-btn">
          แก้ไขคะแนน
          <Math />
        </button>
      </div>
    </div>
  );
};

export default Round;
