import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type TRatingProps = {
  value: number;
  outOf?: number;
};

const RatingCount = ({ value, outOf = 5 }: TRatingProps) => {
  // calculate rating
  const star = [];
  for (let i = 1; i <= outOf; i++) {
    if (i <= value) {
      star.push(<FaStar key={i} className="text-yellow-400 text-xl" />);
    } else if (i === Math.ceil(value) && !Number.isInteger(value)) {
      star.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-xl" />);
    } else {
      star.push(<FaRegStar key={i} className="text-yellow-400 text-xl" />);
    }
  }
  return <div className="flex space-x-1">{star}</div>;
};

export default RatingCount;
