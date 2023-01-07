import React, { useState } from "react";
import "./Navbar";
import BookCab from "./Platform/BookCab";
import GetRide from "./Platform/GetRide";

const Landing = () => {
  const [startBooking, setStartBooking] = useState(false);
  const [startPicking, setStartPicking] = useState(false);

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
    <div>
      <div
        className="flex p-20 pt-60 pb-48 items-center justify-around justify-items-center justify-self-center"
        id="landing"
      >
        <div className="mt-3 text-darkerIndigo">
          <h1 className=" text-4xl font-semibold ml-3 font-ubuntu">Let's make friends and ride safe!</h1>
          <h2 className=" mt-2 ml-3 text-xl font-medium font-ubuntu mt-5">
            Book your SheCab Book your own cab or share with <br></br>others to
            save money and reduce carbon footprint.<br></br>
            All the drivers and passengers are female.
          </h2>

          <button
            type="button"
            onClick={setStartBookingTrue}
            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg  px-5 py-2.5 text-center w-64 mt-10 ml-3 mr-2 mb-2"
          >
            Book Cab
          </button>
          <button
            type="button"
            onClick={setStartPickingTrue}
            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg  px-5 py-2.5 text-center w-64 mt-10 ml-3 mr-2 mb-2"
          >
            Pickup Rides
          </button>
        </div>
        <div className="mt-3">
          <img className="h-96" src="./logo_shecab.png" alt=""/>
        </div>
      </div>
      {renderCabBooking()}
      {renderRidePickup()}
    </div>
  );
};

export default Landing;
