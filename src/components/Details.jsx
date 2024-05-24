import React from "react";
import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

export default function Details({ data }) {
  const [showDetail, setShowDetail] = useState(false);

  const handleExpand = () => {
    setShowDetail(!showDetail);
  };

  const formatdata = (data) =>
    `${data.slice().split("T")[0]} ${data.slice().split("T")[1].slice(0, -1)}`;

  return (
    <div className="detail-container">
      {showDetail ? (
        <>
          <ul>
            <li>
              {/* Format date and time */}
              Created: {formatdata(data.created_at)}
            </li>
            <li>
              {/* Format date and time */}
              Last update: {formatdata(data.pushed_at)}
            </li>
            {data.language !== null && <li>Language: {data.language}</li>}
            {data.description !== null && (
              <li>Description: {data.description}</li>
            )}
          </ul>
          {/* Expand / Collapse mechanics */}
          <div className="expand" onClick={handleExpand}>
            <MdOutlineExpandLess className="expand-icon" />
          </div>
        </>
      ) : (
        <div className="expand" onClick={handleExpand}>
          <MdOutlineExpandMore className="expand-icon" />
        </div>
      )}
    </div>
  );
}
