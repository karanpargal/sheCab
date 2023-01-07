import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const teamData = [
    {
      name: "Karan Pargal",
      skills: "Full-stack Developer",
      image:
        "https://drive.google.com/uc?export=view&id=1K8QbLjaGeKFvTPAAMO5WPtvho24KxeOk",
      github: "https://www.github.com/karanpargal",
      linkedin: "https://www.linkedin.com/in/karan-pargal-509813211/",
    },
    {
      name: "Yashaswini Singh Shaktawat",
      skills: "Frontend Developer",
      image:
        "https://drive.google.com/uc?export=view&id=1g8mYjzmunb_rUSpY67vu9NvnL7e-c4Zl",
      github: "https://github.com/Yashaswini-Singh02",
      linkedin: "https://www.linkedin.com/in/yashaswini-singh-shaktawat-46b286223/",
    },
    {
      name: "Mohammed Farhan",
      skills: "App Developer",
      image:
        "https://drive.google.com/uc?export=view&id=1g8mYjzmunb_rUSpY67vu9NvnL7e-c4Zl",
      github: "https://github.com/farhan121212",
      linkedin: "https://www.linkedin.com/in/mohammad-farhan-bba46420a/",
    },
  ];

  return (
    <div className="mt-10 font-display" id="team">
      <p className=" text-4xl text-darkerIndigo font-bold ml-48 mb-12">Team </p>
      <div className="flex flex-row justify-center gap-10 text-greys px-20 pb-20">
        <TeamCard teamData={teamData[0]} />
        <TeamCard teamData={teamData[1]} />
        <TeamCard teamData={teamData[2]} />
      </div>
    </div>
  );
};

export default Team;
