import React from "react";
import hillsImg from "../Statics/Assets/pattern-hills.svg";

const Hills = () => {
  return (
    <div
      className="hills"
      style={{
        backgroundImage: `url(${hillsImg})`,
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Hills;
