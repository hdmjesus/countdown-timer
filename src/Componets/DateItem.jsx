import React from "react";

const DateItem = ({ date, seconds, minutes, hours, days }) => {
  return (
    <div className="dateCard  items-center m-1  justify-center w-20   text-sm ">
      <div className="dataCard__container relative w-full">
        <div className="dataCard__side--a bg-darkBlue w-full h-10 p-2 "></div>
        <div className="dataCard__counter absolute inset-0 top-4 ">
          {date === "Seconds" && (
            <p className="text-softRed text-4xl text-center">{seconds}</p>
          )}
          {date === "Minutes" && (
            <p className="text-softRed text-4xl text-center">{minutes}</p>
          )}
          {date === "Hours" && (
            <p className="text-softRed text-4xl text-center">{hours}</p>
          )}
          {date === "Day" && (
            <p className="text-softRed text-4xl text-center">{days}</p>
          )}
        </div>
        <div className="dataCard__side--b bg-darkBlue shadow-lg h-10 p-2"></div>
      </div>
      <p className="mt-4 text-center text-primaryBlue">{date}</p>
    </div>
  );
};

export default DateItem;
