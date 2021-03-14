import React from "react";
import FaceIcon from "../Statics/icons/icon-facebook.svg";
import InstaIcon from "../Statics/icons/icon-instagram.svg";
import PintIcon from "../Statics/icons/icon-pinterest.svg";
const SocialMedia = () => {
  return (
    <div className="socialMedia w-28 absolute bottom-10">
      <div className="flex justify-center w-full mr-4">
        <figure className="mr-4">
          <img src={FaceIcon} className="" />
        </figure>
        <figure className="mr-4">
          <img src={InstaIcon} className="" />
        </figure>
        <figure className="mr-4">
          <img src={PintIcon} className="" />
        </figure>
      </div>
    </div>
  );
};
export default SocialMedia;
