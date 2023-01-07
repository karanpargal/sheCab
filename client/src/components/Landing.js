import React, { useState } from "react";
import "./Navbar";
import BookCab from "./Platform/BookCab";

const Landing = () => {
  const [startBooking, setStartBooking] = useState(false);

  const setStartBookingTrue = () => {
    setStartBooking(true);
  };

  const renderCabBooking = () => {
    
    if (startBooking) {
      document.getElementById("landing").style.display = "none";
      return <BookCab />;
    }
  };

  return (
    <div>
      <div className="flex w-96 h-96 text-black mt-20 " id="landing">
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
        </div>
      </div>
      {renderCabBooking()}
    </div>
  );
};

export default Landing;
