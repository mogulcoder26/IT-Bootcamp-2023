import React from "react";
import "./team.css";
import TeamCard from "@/components/TeamCard";
import members from "./members";

const page = () => {
  return (
    <>
      <div className="container mx-auto">
        <TeamCard {...members[0]} />
        <TeamCard {...members[1]} />
        <TeamCard {...members[2]} />
      </div>
    
      <div className="container mx-auto">
        <TeamCard {...members[3]} />
        <TeamCard {...members[4]} />
        <TeamCard {...members[5]} />
      </div>

      <div className="container mx-auto">
        <TeamCard {...members[6]} />
        <TeamCard {...members[7]} />
        <TeamCard {...members[8]} />
      </div>

      <div className="container mx-auto">
        <TeamCard {...members[9]} />
        <TeamCard {...members[10]} />
      </div>
    </>
  );
};

export default page;
