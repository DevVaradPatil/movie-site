import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, year, rating }) => {
  const rating_percent = Math.round(rating * 10);

  // Determine the color based on the rating percentage
  let progressColor;
  if (rating_percent < 50) {
    progressColor = "#FF474C";
  } else if (rating_percent > 70) {
    progressColor = "#21CD78";
  } else {
    progressColor = "#D1D431";
  }

  return (
    <Link to={`/movie/${title}`} className="w-48 mb-8 transition-all duration-200 cursor-pointer hover:scale-105">
      <div
        className="w-[170px] h-[240px] relative rounded-md"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Wrapper for Circular Progress Bar and Rating */}
        <div
          className="absolute left-1 top-1 bg-[#081C22] rounded-full"
          style={{ width: "40px", height: "40px" }}
        >
          {/* SVG for Circular Progress Bar */}
          <svg
            className="absolute inset-0"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke="#808080"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke={progressColor}
              strokeWidth="2"
              fill="none"
              strokeDasharray="113"
              strokeDashoffset={113 - (113 * rating_percent) / 100}
              transform="rotate(-90 20 20)"
            />
          </svg>

          {/* Rating Percentage Div */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full z-0"
            style={{
              color: "white",
              width: "40px",
              height: "40px",
            }}
          >
            <div className="text-[14px] font-medium">
              {rating_percent}
              <sup className="text-[8px]">%</sup>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-primary-text mt-2 text-md font-medium truncate">
          {title}
        </h1>
        <h3 className="text-sm text-secondary-text">{year}</h3>
      </div>
    </Link>
  );
};

export default Card;
