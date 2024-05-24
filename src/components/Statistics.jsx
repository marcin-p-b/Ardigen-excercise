import React from "react";
import { GoEye } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import Stat from "./Stat";

export default function Statistics({ data }) {
  // Component for displaying info about stars, watchers, forks count
  return (
    <div>
      <div className="repo-follow-info">
        <Stat statData={data.stargazers_count} statIcon={<FaRegStar />} />
        <Stat statData={data.watchers_count} statIcon={<GoEye />} />
        <Stat statData={data.forks_count} statIcon={<GoRepoForked />} />
      </div>
    </div>
  );
}
