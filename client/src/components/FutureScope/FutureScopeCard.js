import React, { useState } from "react";

const FutureScopeCard = (props) => {
  const [show, setShow] = useState(true);
  return (
    <div
      className="mb-10"
      onClick={() => {
        setShow(!show);
      }}
    >
      {show ? (
        <div>
          <label className="flex w-96 rounded-lg border-2 font-bold text-left text-darkerIndigo hover:scale-110">
            <p className="py-4 text-left text-2xl ml-4 ">{props.futureData.topic}</p>
          </label>
        </div>
      ) : (
        <div>
          <label className="flex w-96 hover:scale-110 rounded-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 ">
            <p className="py-4 text-xl ml-4">{props.futureData.description}</p>
          </label>
        </div>
      )}
    </div>
  );
};

export default FutureScopeCard;
