import React, { useState } from "react";
import "./Navbar";
import BookCab from "./Platform/BookCab";
import GetRide from "./Platform/GetRide";

const Landing = () => {
  const [startBooking, setStartBooking] = useState(false);
  const [startPicking , setStartPicking] = useState(false);

  const setStartPickingTrue = () => {
    setStartPicking(true);
  };

  const setStartBookingTrue = () => {
    setStartBooking(true);
  };

  const renderCabBooking = () => {
    
    if (startBooking) {
      document.getElementById("landing").style.display = "none";
      return <BookCab />;
    }
  };

  const renderRidePickup = () => {
    
    if (startPicking) {
      document.getElementById("landing").style.display = "none";
      return <GetRide />;
    }
  };

  return (
    <div className="bg-LavenderBlue">
      <div className="flex text-black p-20 pt-60 pb-48 items-center justify-around justify-items-center justify-self-center" id="landing">
        <div className="mt-3 ">
          <h1 className=" text-4xl ml-3">Let's make friends and ride safe!</h1>
          <h2 className=" mt-2 ml-3 text-base">
            Book your SheCab Book your own cab or share with <br></br>others to
            save money and reduce carbon footprint.<br></br>
            All the drivers and passengers are female.
          </h2>

          <button
            type="button"
            onClick={setStartBookingTrue}
            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg  px-5 py-2.5 text-center w-64 mt-20 ml-3 mr-2 mb-2"
          >
            Book Cab
          </button>
          <button
            type="button"
            onClick={setStartPickingTrue}
            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg  px-5 py-2.5 text-center w-64 mt-20 ml-3 mr-2 mb-2"
          >
            Pickup Rides
          </button>
        </div>
        <div className="mt-3">
          <img
            className="w-96 h-96"
            src="https://images.unsplash.com/photo-1616166330073-8e1b2f9b9b1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
      </div>
      {renderCabBooking()}
    </div>
  );
};

export default Landing;
