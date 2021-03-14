import React from "react";
import Date from "./Date";

const Timer = () => {
  return (
    <section className=" flex  flex-col  items-center -mt-20 font-body uppercase text-lg p-2 w-80">
      <h1 className="text-white tracking-widest p-5 text-center ">
        {" "}
        We're launching soon
      </h1>
      <Date />
    </section>
  );
};

export default Timer;
