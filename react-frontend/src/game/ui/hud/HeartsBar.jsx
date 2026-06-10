import heartFullImage from "../../../assets/game/heart-full.png";
import heartHalfImage from "../../../assets/game/heart-half.png";
import heartEmptyImage from "../../../assets/game/heart-empty.png";
import heartBlueFullImage from "../../../assets/game/heart-blue-full.png";
import heartBlueHalfImage from "../../../assets/game/heart-blue-half.png";
import heartGreenFullImage from "../../../assets/game/heart-green-full.png";
import heartGreenHalfImage from "../../../assets/game/heart-green-half.png";

function heartImage(hearts, index) {
  const value = hearts - index;
  if (value >= 1) return heartFullImage;
  if (value >= 0.5) return heartHalfImage;
  return heartEmptyImage;
}

function tempHeartImage(hearts, index) {
  const value = hearts - index;
  return value >= 1 ? heartBlueFullImage : heartBlueHalfImage;
}

function greenHeartImage(hearts, index) {
  const value = hearts - index;
  return value >= 1 ? heartGreenFullImage : heartGreenHalfImage;
}

export default function HeartsBar({
  hearts = 4,
  maxHearts = 4,
  tempHearts = 0,
  greenHearts = 0,
  className = "",
}) {
  const tempHeartCount = Math.ceil(tempHearts);
  const greenHeartCount = Math.ceil(greenHearts);

  return (
    <div
      className={`heart-row ${className}`}
      aria-label={`HP ${hearts} hearts, blue ${tempHearts} hearts, green ${greenHearts} hearts`}
    >
      {Array.from({ length: maxHearts }, (_, index) => (
        <img key={`red-${index}`} src={heartImage(hearts, index)} alt="" aria-hidden="true" />
      ))}
      {Array.from({ length: tempHeartCount }, (_, index) => (
        <img
          key={`blue-${index}`}
          className="heart-temp"
          src={tempHeartImage(tempHearts, index)}
          alt=""
          aria-hidden="true"
        />
      ))}
      {Array.from({ length: greenHeartCount }, (_, index) => (
        <img
          key={`green-${index}`}
          className="heart-green"
          src={greenHeartImage(greenHearts, index)}
          alt=""
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
