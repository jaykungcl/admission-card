import { ReactComponent as Share } from "../assets/share.svg";
import { numberWithCommas } from "../utils/numberWithCommas";

const Footer = ({ likes }) => {
  return (
    <div className="footer">
      <div className="likes-num">
        {/* {img} */}
        <p>{numberWithCommas(likes)}</p>
        <p>คนที่สนใจ</p>
      </div>
      <Share />
    </div>
  );
};

export default Footer;
