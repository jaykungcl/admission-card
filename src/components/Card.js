import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Card = ({ data }) => {
  console.log(data);
  const { logo, name, faculty, score, roundSeats, likes } = data;
  return (
    <div className="card">
      <Header logo={logo} name={name} faculty={faculty} />
      <Body score={score} roundSeats={roundSeats} />
      <Footer likes={likes} />
    </div>
  );
};

export default Card;
