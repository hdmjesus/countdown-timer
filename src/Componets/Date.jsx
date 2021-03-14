import React from "react";
import DateItem from "./DateItem";

const Date = () => {
  return (
    <div className="date flex p-1">
      <DateItem date="Day" />
      <DateItem date="Hours" />
      <DateItem date="Minutes" />
      <DateItem date="Seconds" />
    </div>
  );
};

export default Date;
