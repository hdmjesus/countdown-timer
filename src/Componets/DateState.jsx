import React, { useState, useEffect } from "react";
import DateItem from "./DateItem";

const DateState = ({ deadlineNext }) => {
  const [TimeNext, setTimeNext] = useState(deadlineNext);

  useEffect(() => {
    const getRemaintTime = () => {
      let now = new Date();
      let remainTime = (new Date(`${deadlineNext}`) - now + 1000) / 1000;
    };
    getRemaintTime();
  }, [deadlineNext]);
  return (
    <div className="date flex p-1">
      <DateItem date="Day" />
      <DateItem date="Hours" />
      <DateItem date="Minutes" />
      <DateItem date="Seconds" />
    </div>
  );
};

export default DateState;
