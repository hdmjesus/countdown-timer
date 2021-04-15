import React, { useState, useEffect, useRef } from "react";
import DateItemDays from "./DateItemDays";
import DateItemHours from "./DateItemHours";
import DateItemMinutes from "./DateItemMinutes";
import DateItemSeconds from "./DateItemSeconds";
import useInterval from "../Hooks/useInterval";

const DateState = ({ deadlineNext, on }) => {
  const [time, setDate] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    remainTime: null,
  });
  const [comp, setComp] = useState();

  const { days, hours, minutes, seconds, remainTime } = time;

  function culo() {
    let now = new Date();
    let fecha = new Date(deadlineNext);
    const timeup = (fecha.getTime() - now.getTime()) / 1000;
    let dias = Math.floor(timeup / (3600 * 24));
    let horas = Math.floor((timeup / 3600) % 24);
    let minutos = Math.floor((timeup / 60) % 60);
    let segundos = Math.floor(timeup % 60);

    setDate({
      ...time,
      days: dias,
      hours: horas,
      seconds: segundos,
      minutes: minutos,
    });
  }

  useInterval(culo, 1000);
  return (
    <div className="date flex p-1">
      <DateItemDays date="Day" days={days} />
      <DateItemHours date="Hours" hours={hours} />
      <DateItemMinutes date="Minutes" minutes={minutes} />
      <DateItemSeconds date="Seconds" seconds={seconds} />
      {/* <button onClick={culo}>Evento</button> */}
    </div>
  );
};

export default DateState;
