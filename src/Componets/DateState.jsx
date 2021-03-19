import React, { useState, useEffect } from "react";
import DateItem from "./DateItem";

const DateState = ({ deadlineNext, on }) => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [remainTime, setRemainTime] = useState();

  const getTimeup = (deadlineNext) => {
    const now = new Date();
    let remainTime = (now - new Date(`${deadlineNext}`) + 1000) / 1000;

    setRemainTime(remainTime);
    setSeconds(("0" + Math.abs(Math.floor(remainTime % 60))).slice(-2));
    setMinutes(("0" + Math.abs(Math.floor((remainTime / 60) % 60))).slice(-2));
    setHours(("0" + Math.abs(Math.floor((remainTime / 3600) % 24))).slice(-2));
    setDays(("0" + Math.abs(Math.floor(remainTime / (3600 * 24)))).slice(-2));
  };

  useEffect(() => {
    const timeUdapte = () => {
      const interval = setInterval(() => {
        getTimeup(deadlineNext);
        if (remainTime <= 0) {
          clearInterval(interval);
          on();
        }
      }, 1000);
    };
    timeUdapte();
    // setInterval(timeUdapte, 1000);
  }, [seconds]);
  return (
    <div className="date flex p-1">
      <DateItem date="Day" days={days} />
      <DateItem date="Hours" hours={hours} />
      <DateItem date="Minutes" minutes={minutes} />
      <DateItem date="Seconds" seconds={seconds} />
    </div>
  );
};

export default DateState;
