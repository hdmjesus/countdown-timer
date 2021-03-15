import React, { useEffect, useState } from "react";
import DateState from "./DateState";
import Modal from "../Componets/Modal";
const Timer = () => {
  const [ActivateModal, setActivateModal] = useState(true);
  const [Deadline, setDeadline] = useState();

  const handleModalOn = () => {
    setActivateModal(true);
  };
  const handleModalOff = () => {
    setActivateModal(false);
  };
  return (
    <section className=" flex  flex-col  items-center -mt-20 font-body uppercase text-lg p-2 w-80">
      <h1 className="text-white tracking-widest p-5 text-center ">
        {" "}
        We're launching soon
      </h1>
      <DateState on={handleModalOn} deadlineNext={Deadline} />
      {ActivateModal && (
        <Modal off={handleModalOff} deadlineModal={setDeadline} />
      )}
    </section>
  );
};

export default Timer;
