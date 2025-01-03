import "./App.css";
import React, { useState } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddButton = () => {
    if (inputValue.length === 0) {
      setError("Please enter todo task");
      return;
    } else {
      setError("");
      setTodo([...todo, { text: inputValue, status: "Active" }]);
    }
  };

  return (
    <div className="App">
      <div className="Main">
        <div className="title">To-Do List</div>
        <div className="containerOfTextAndButton">
          <textarea
            placeholder="Type nigga"
            onChange={handleInputChange}></textarea>
          <button className="addButton" onClick={handleAddButton}>
            Add
          </button>
        </div>
        <div className="stateButtons">
          <button id="allB">All</button>
          <button id="activeB">Active</button>
          <button id="completedB">Completed</button>
        </div>

        {/* {todo.map(todo)=>{
        return <div>{todo.text}</div>;
      }} */}
        <footer>Powered by me XD</footer>
      </div>
    </div>
  );
}

export default App;
