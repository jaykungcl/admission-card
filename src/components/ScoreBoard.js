import { ReactComponent as Logo } from "../assets/badge.svg";
import { numberWithCommas } from "../utils/numberWithCommas";

const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <div className="total-score">
        <Logo className="badge-icon" />
        <div className="total-score-text">
          <p>คะแนนของคุณคือ</p>
          <h1>{score ? numberWithCommas(score.max) : "-"}</h1>
        </div>
      </div>
      <div className="detail-score">
        <div className="score-min">
          <h3>{score ? numberWithCommas(score.min) : "-"}</h3>
          <p>คะแนนต่ำสุด {score ? String(score.year).slice(2) : "-"}</p>
        </div>
        <div className="score-avg">
          <h3>{score ? numberWithCommas(score.avg) : "-"}</h3>
          <p>คะแนนเฉลี่ย {score ? String(score.year).slice(2) : "-"}</p>
        </div>
        <div className="score-max">
          <h3>{score ? numberWithCommas(score.max) : "-"}</h3>
          <p>คะแนนสูงสุด {score ? String(score.year).slice(2) : "-"}</p>
        </div>
      </div>
      <div className="figure-score">
        <h3>ดูสัดส่วนคะแนน</h3>
      </div>
    </div>
  );
};

export default ScoreBoard;
