import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ComponentInput = (props) => {
   const{setError,setTodos, todos, setNumberOfTasks, numberOfTasks }=props;
   const [inputValue, setInputValue] = useState(""); 
   const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddButtonClick = () => {
    if (inputValue.length === 0) {
      setError("Please enter a task...");
      return;
    } else {
      setError("");
      setTodos([
        ...todos,
        { text: inputValue, id: uuidv4(), status: "ACTIVE" },
      ]);
      setInputValue("");
      setNumberOfTasks(numberOfTasks + 1);
    }
  };
  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      handleAddButtonClick();
    }
  };
  return(
    <div id="main">
          <div className="garchig">To-Do List</div>
          <div className="inputAdd">
            <input
              id="input-box"
              placeholder=" Add a new task..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handlePressKey}
              autoComplete="off"
            />

            <button id="add-button" onClick={handleAddButtonClick}>
              Add
            </button>
          </div>
        </div>
  )
};
export default ComponentInput;



