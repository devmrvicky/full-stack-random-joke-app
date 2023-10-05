import { star, strokeStar, halfStar } from "./assets";

const Rating = ({ rating }) => {
  const stars = [];
  let wholeNum = Math.floor(rating);
  while (wholeNum >= 0) {
    stars.push(
      <li className="w-4" key={stars.length}>
        <img src={star} alt="whole star" className="w-full" />
      </li>
    );
    wholeNum--;
  }
  return <ul className="flex items-center gap-2 py-2">{stars}</ul>;
};

export default Rating;
