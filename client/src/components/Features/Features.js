import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const FeaturesData = [
    { Icon: "", Heading: "Karan Pargal", Description: "Fullstack Developer" },
    {
      Icon: "",
      Heading: "Yashaswini",
      Description: "Frontend Developer",
    },
    { Icon: "", Heading: "Mohammed Farhan", Description: "App Developer" },
  ];

  return (
    <div className="mt-10 font-display" id="features">
      <p className=" text-4xl text-[#0D3D56] font-bold ml-48 mb-12">Features </p>
      <div className="flex flex-row justify-center gap-10 text-greys p-20">
        <FeaturesCard FeaturesData={FeaturesData[0]} />
        <FeaturesCard FeaturesData={FeaturesData[1]} />
        <FeaturesCard FeaturesData={FeaturesData[2]} />
      </div>
    </div>
  );
};

export default Features;
