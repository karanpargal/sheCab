import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const teamData = [
    {
      name: "Karan Pargal",
      skills: "Full-stack Developer",
      image:
        "https://media.licdn.com/dms/image/D5603AQGrpKRCA6Wnfg/profile-displayphoto-shrink_800_800/0/1667756714982?e=1678924800&v=beta&t=kUH8pYaymKqRRW35pjkhNF8HgxvY3ymJNTBCjAjkuTk",
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
        "https://media.licdn.com/dms/image/C4E03AQGhBsYkGd9lsQ/profile-displayphoto-shrink_800_800/0/1638355923949?e=1678924800&v=beta&t=gHP5oicMTsYWHL3vfP-keSUARUMj2gI9QZ80vi9qhm0",
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
