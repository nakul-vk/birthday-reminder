import React, { useState } from "react";
import Person from "./Person";
import people from "../data";

function Card() {
  const [data, setData] = useState(people);
  return (
    <div className="card">
      <h3 id="heading">{data.length} birthdays today</h3>
      {data.map((person) => {
        return <Person key={person["_id"]} {...person} />;
      })}
      <button className="btn" onClick={() => setData([])}>
        Clear All
      </button>
    </div>
  );
}

export default Card;
