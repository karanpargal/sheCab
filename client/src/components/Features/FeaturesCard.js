import React from 'react'


const FeaturesCard = (props) => {
    return (
      <div>
        <div className=" rounded-lg h-80 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 flex bg-white flex-col w-96 ">
          <img
            src={props.FeaturesData.image}
            alt=""
            className="  self-center w-96 h-24 "
          />
          <div className="  text-center">
            <h1 className=" pt-10 font-bold font-ubuntu ml-1 text-Indigo text-2xl text-center">
              {props.FeaturesData.Heading}
            </h1>
            <div className="pt-7 text-center">
              <h1 className="font-semibold ml-1 text-Indigo text-lg text-center">
              {props.FeaturesData.Description}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturesCard;