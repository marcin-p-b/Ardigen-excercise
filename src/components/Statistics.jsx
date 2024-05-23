import React from "react";
import { GoEye } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";

export default function Statistics({ data }) {
  // Component for displaying info about stars, watchers, forks count
  return (
    <div>
      <div className="repo-follow-info">
        <div>
          <p>{data.stargazers_count} </p>
          <i>
            <FaRegStar />
          </i>
        </div>
        <div>
          <p>{data.watchers_count} </p>
          <i>
            <GoEye />
          </i>
        </div>
        <div>
          <p>{data.forks_count} </p>
          <i>
            <GoRepoForked />
          </i>
        </div>
      </div>
    </div>
  );
}
