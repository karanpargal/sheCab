import React from "react";
import "./Navbar";

const Landing = () => {
  return (
    <div className="flex w-96 h-96 text-black mt-20  ">
      <div className="mt-3 ">
        <h1 className=" text-4xl ml-3">Let's make friends and ride safe!</h1>
        <h2 className=" mt-2 ml-3 text-base">
          Book your SheCab Book your own cab or share with <br></br>others to save money
          and reduce carbon footprint.<br></br>
          All the drivers and passengers are
          female.
        </h2>

        <button
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg  px-5 py-2.5 text-center w-64 mt-20 ml-3 mr-2 mb-2"
        >
          Book Cab
        </button>
      </div>
    </div>
  );
};

export default Landing;
