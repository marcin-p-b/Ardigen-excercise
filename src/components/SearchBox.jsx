import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBox({
  userInput,
  handleChange,
  handleClick,
  handleKeyDown,
}) {
  // Component for username input and search button
  return (
    <div className="search-container">
      <div>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="Enter github username"
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>
          <FaMagnifyingGlass className="magniglass" />
        </button>
      </div>
    </div>
  );
}
