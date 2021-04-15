import React, { useEffect } from "react";

const DateItemMinutes = ({ date, seconds, minutes, hours, days }) => {
  useEffect(() => {
    const sideA = document.querySelector(".dataCard__side--a.minutes");
    const cardContainer = document.querySelector(".card__container.minutes");

    function addAnimationMinutes() {
      sideA.classList.add("active");
      cardContainer.classList.add("active");
    }
    cardContainer.addEventListener("animationend", () => {
      sideA.classList.remove("active");
      cardContainer.classList.remove("active");
    });
    addAnimationMinutes();
  }, [minutes]);
  return (
    <div className="dateCard  items-center m-1  justify-center w-20   text-sm ">
      <div className="dataCard__container relative w-full">
        <div className="card__container minutes bg-darkBlue absolute left-0 bottom-0 right-0 top-0"></div>
        <div className="dataCard__side--a minutes bg-darkBlue w-full h-10 p-2 "></div>
        <div className="dataCard__counter absolute inset-0 top-4 ">
          <p className="text-softRed text-4xl text-center">{minutes}</p>
        </div>
        <div className="dataCard__side--b bg-darkBlue shadow-lg h-10 p-2"></div>
      </div>
      <p className="mt-4 text-center text-primaryBlue">{date}</p>
    </div>
  );
};

export default DateItemMinutes;
