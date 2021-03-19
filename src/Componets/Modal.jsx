import React, { useRef } from "react";

const Modal = ({ off, deadlineModal }) => {
  const datenext = useRef();
  const handleModalInfo = () => {
    const value = datenext.current.value;
    deadlineModal(value);
    off();
  };

  return (
    <article className="modal ">
      <div className="modal__main flex flex-col justify-around items-center ">
        <input
          className="font-body uppercase text-center bg-darkBlue p-4 rounded-md text-softRed"
          type="date"
          name="nextDate"
          id="deadline"
          ref={datenext}
        />
        <div className="modal__buttons  ">
          <button
            className="bg-veryDarkBlue p-3 rounded-md text-white w-32 text-center"
            onClick={handleModalInfo}
          >
            Count
          </button>
        </div>
      </div>
    </article>
  );
};

export default Modal;
