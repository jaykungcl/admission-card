import Round from "./Round";
import ScoreBoard from "./ScoreBoard";

const Body = ({ roundSeats, score }) => {
  return (
    <div>
      <Round roundSeats={roundSeats} score={score} />
      <ScoreBoard score={score} />
    </div>
  );
};

export default Body;
