import React from "react";
import ProfileImg from "./ProfileImg";

function Person(person) {
  return (
    <div className="person">
      <ProfileImg img={person.img} />
      <div className="info">
        <p style={{ fontWeight: "bold" }}>{person.name}</p>
        <p style={{ color: "gray" }}>{person.age} years</p>
      </div>
    </div>
  );
}

export default Person;
