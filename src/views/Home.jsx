import React from "react";
import Start from "../Componets/Stars";
import Hills from "../Componets/Hills";
import Timer from "../Componets/Timer";
const Home = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen bg-veryDarkBlue">
      <Start />
      <Hills />
      <Timer />
    </section>
  );
};

export default Home;
