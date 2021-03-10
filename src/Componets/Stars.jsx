import React from "react";
import starsImg from "../Statics/Assets/bg-stars.svg";

const stars = () => {
  return (
    <div
      className="stars"
      style={{
        backgroundImage: `url(${starsImg})`,
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default stars;
