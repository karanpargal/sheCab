import React from 'react'


const FeaturesCard = (props) => {
    return (
      <div>
        <div className=" bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex bg-white flex-col w-96 ">
          <img
            src={props.FeaturesData.image}
            alt=""
            className="self-center w-96 h-24 border-solid border-greys border-2"
          />
          <div className="border-solid border-greys border-2 border-t-0 ">
            <h1 className="font-bold ml-1 text-textcolor text-center">
              {props.FeaturesData.Heading}
            </h1>
            <div className="border-solid border-greys border-2 border-x-0 m-0 text-center">
              <h1 className="font-bold ml-1 text-textcolor text-center">
              {props.FeaturesData.Description}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturesCard;