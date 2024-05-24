import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBox({
  userInput,
  onHandleChange,
  onHandleClick,
  onHandleKeyDown,
}) {
  // Component for username input and search button
  return (
    <div className="search-container">
      <div>
        <input
          type="text"
          value={userInput}
          onChange={onHandleChange}
          placeholder="Enter github username"
          onKeyDown={onHandleKeyDown}
        />
        <button onClick={onHandleClick}>
          <FaMagnifyingGlass className="magniglass" />
        </button>
      </div>
    </div>
  );
}
