import React from "react";
import hillsImg from "../Statics/Assets/pattern-hills.svg";
import SocialMedia from "../Componets/SocialMedia";
const Hills = () => {
  return (
    <div
      className="hills absolute bottom-0 right-0 left-0 z-20 w-full h-36"
      style={{
        backgroundImage: `url(${hillsImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <SocialMedia />
    </div>
  );
};

export default Hills;
