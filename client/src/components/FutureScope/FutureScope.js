import React from "react";
import FutureScopeCard from "./FutureScopeCard";

const FutureScope = () => {
  const futureData = [
    { topic: "Authentication", description: "Add authentication using national ID to only onboard female passengers or drivers" },
    { topic: "Integrate maps", description: "Integrate Google maps to have easier location selection." },
    { topic: "Car Pooling", description: "Add carpooling for passengers to save money." },
    { topic: "Cab Options", description: "Give users a variety of cabs to choose from." }
  ];
  return (
    <div className="mt-10 font-ubuntu" id="future">
      <p className=" text-4xl text-darkerIndigo font-bold ml-48 mb-12">
        Future Scope
      </p>
      <div className="my-20 grid justify-items-center">
        <div className=" grid grid-cols-2 gap-10">
          <FutureScopeCard futureData={futureData[0]} />
          <FutureScopeCard futureData={futureData[1]} />
          <FutureScopeCard futureData={futureData[2]} />
          <FutureScopeCard futureData={futureData[3]} />
        </div>
      </div>
    </div>
  );
};

export default FutureScope;
