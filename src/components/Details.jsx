import React from "react";
import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

export default function Details({ data }) {
  const [showDetail, setShowDetail] = useState(false);

  const handleExpand = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="detail-container">
      {showDetail ? (
        <div>
          <ul>
            <li>
              {/* Format date and time */}
              Created: {data.created_at.slice().split("T")[0]}{" "}
              {data.created_at.slice().split("T")[1].slice(0, -1)}
            </li>
            <li>
              {/* Format date and time */}
              Last update: {data.pushed_at.slice().split("T")[0]}{" "}
              {data.pushed_at.slice().split("T")[1].slice(0, -1)}
            </li>
            {data.language !== null ? <li>Language: {data.language}</li> : null}
            {data.description !== null ? (
              <li>Description: {data.description}</li>
            ) : null}
          </ul>
          {/* Expand / Collapse mechanics */}
          <div className="expand" onClick={handleExpand}>
            <MdOutlineExpandLess className="expand-icon" />
          </div>
        </div>
      ) : (
        <div className="expand" onClick={handleExpand}>
          <MdOutlineExpandMore className="expand-icon" />
        </div>
      )}
    </div>
  );
}
