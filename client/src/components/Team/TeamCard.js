import React from "react";

const TeamCard = (props) => {
  return (
    <div>
      <div className="flex flex-col w-96 ">
        <img
          src={props.teamData.image}
          alt=""
          className="self-center w-96 h-96 border-black border-solid  border-2"
        />
        <div className="border-solid border-black border-2 border-t-0 ">
          <h1 className="font-bold ml-1 text-xl text-center py-1">
            {props.teamData.name}
          </h1>
          <div className="border-solid text-lg border-black border-2 border-x-0 border-b-0 m-0 text-center">
            <h1 className="font-medium ml-1 py-1 text-center">
            {props.teamData.skills}
            </h1>
          </div>
          <div className="flex font-medium border-solid text-lg py-1 border-black border-2 border-x-0 border-b-0 m-0 text-center items-center justify-around ">
            <a target="_blank" rel="noreferrer" href={props.teamData.github} className="hover:underline">Github</a>
            <a href={props.teamData.linkedin} className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;