import React from "react";
import "../App.css";
import "../index.css";

export const Magixx = ({
  inputValue,
  error,
  handleInputChange,
  handlePressKey,
  handleAddButtonClick,
}) => {
  return (
    <>
      <div id="main">
        <div className="garchig">To-Do List</div>
        <div className="inputAdd">
          <input
            id="input-box"
            placeholder="Add a new task..."
            value={inputValue} // Controlled input
            onChange={handleInputChange} // Ensure this handler is passed
            onKeyDown={handlePressKey}
          />
          <button id="add-button" onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
      </div>
      {error.length > 1 && <div>{error}</div>}
    </>
  );
};
