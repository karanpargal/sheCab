import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const FeaturesData = [
    {
      Icon: "",
      Heading: "Driver Policy",
      Description:
        "To empower women and to ensure safety, She-Cab provides you with trained Female Drivers",
    },
    {
      Icon: "",
      Heading: "Passenger Policy",
      Description:
        "To ensure your comfort and safety She-Cab only allows Female Passengers",
    },
    {
      Icon: "",
      Heading: "EV Cabs",
      Description:
        "To reduce carbon emissions and to save our environment, we use electric vehicles only as our cabs",
    },
  ];

  return (
    <div className="mt-10 font-display" id="features">
      <p className=" text-4xl text-[#0D3D56] font-bold ml-48 mb-12">
        Features{" "}
      </p>
      <div className="flex flex-row justify-center gap-10 text-greys p-20">
        <FeaturesCard FeaturesData={FeaturesData[0]} />
        <FeaturesCard FeaturesData={FeaturesData[1]} />
        <FeaturesCard FeaturesData={FeaturesData[2]} />
      </div>
    </div>
  );
};

export default Features;
