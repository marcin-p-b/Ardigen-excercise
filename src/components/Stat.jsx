import React from "react";

export default function Stat({ statData, statIcon }) {
  return (
    <div>
      <p>{statData} </p>
      <i>{statIcon}</i>
    </div>
  );
}
