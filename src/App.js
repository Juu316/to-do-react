import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filterState, setFilterState] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddButton = () => {
    if (inputValue.length === 0) {
      setError("Please enter todo task");
      return;
    } else {
      setError("");
      setTodo([...todo, { text: inputValue, id: uuidv4(), status: "ACTIVE" }]);
    }
  };
  const handleFilterState = (e) => {
    setFilterState(e.target.value);
  };
  const handleBox = (id) => {
    const newTodos = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === "ACTIVE" ? "COMPLETED" : "ACTIVE",
        };
      }
      return todo;
    });
  };
  // --------Tried DOM here------------
  // function createTask() {
  //   let newTask = document.createElement("div");
  //   newTask.innerHTML = { inputValue };
  //   let div = document.getElementById("tasks");
  //   div.appendChild(newTask);
  // }
  return (
    <div className="App">
      <div className="Main">
        <div className="title">To-Do List</div>
        <div className="containerOfTextAndButton">
          <input
            value={inputValue}
            placeholder="Type"
            onChange={handleInputChange}
          />
          {error.length > 1 && <div>{error}</div>}
          <button className="addButton" onClick={handleAddButton}>
            <span className="plus">+</span>
          </button>
        </div>
        <div className="stateButtons">
          <div
            id="allB"
            style={{ color: filterState === "ALL" ? "red" : "green" }}
            onClick={() => {
              handleFilterState("ALL");
            }}>
            All
          </div>
          <div
            onClick={() => {
              handleFilterState("ACTIVE");
            }}
            id="activeB">
            Active
          </div>
          <div
            onClick={() => {
              handleFilterState("COMPLETED");
            }}
            id="completedB">
            Completed
          </div>
        </div>
        {todo
          .filter((todo) => {
            if (filterState === "ALL") {
              return true;
            } else {
              return todo.status === filterState;
            }
          })
          .map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                onChange={() => {
                  handleBox(todo.id);
                }}
              />
              {todo.text}
            </div>
          ))}

        <div id="tasks"></div>

        <footer>Powered by me XD</footer>
      </div>
    </div>
  );
}

export default App;
