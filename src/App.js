import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid"; // ID for our tasks

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);
  const [filterState, setFilterState] = useState("All");

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

  const handleBox = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === "ACTIVE" ? "COMPLETED" : "ACTIVE",
        };
      }
      return todo;
    });
    setTodos(newTodos);

    const countCompleted = newTodos.filter(
      (todo) => todo.status === "COMPLETED"
    ).length;
    setNumberOfCompletedTasks(countCompleted);
  };

  const handleFilterState = (e) => {
    setFilterState(e);
  };

  const handleDeleteTask = (id) => {
    const currentTodos = todos.filter((todo) => todo.id !== id);

    setTodos(currentTodos);

    setNumberOfTasks(numberOfTasks - 1);

    const deletedTask = todos.find((todo) => todo.id === id);
    if (deletedTask && deletedTask.status === "COMPLETED") {
      setNumberOfCompletedTasks(numberOfCompletedTasks - 1);
    }
  };

  const handleClearCompleted = () => {
    const activeTodos = todos.filter((todo) => todo.status !== "COMPLETED");
    setTodos(activeTodos);
    setNumberOfTasks(activeTodos.length);
    setNumberOfCompletedTasks(0);
  };

  return (
    <div>
      <div id="container">
        <div id="main">
          <div className="garchig">To-Do List</div>
          <div className="inputAdd">
            <input
              id="input-box"
              placeholder="Add a new task..."
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
        {error.length > 1 && <div>{error}</div>}
        <div id="task-states-section">
          <button
            id="all-tasks-button"
            onClick={() => handleFilterState("All")}
            className={filterState === "All" ? "active-filter" : ""}>
            All
          </button>
          <button
            id="active-tasks-button"
            onClick={() => handleFilterState("ACTIVE")}
            className={filterState === "ACTIVE" ? "active-filter" : ""}>
            Active
          </button>
          <button
            id="completed-tasks-button"
            onClick={() => handleFilterState("COMPLETED")}
            className={filterState === "COMPLETED" ? "active-filter" : ""}>
            Completed
          </button>
          
        </div>

        <div id="task-list-container">
          {todos
            .filter((todo) => {
              if (filterState === "All") {
                return true;
              } else {
                return todo.status === filterState;
              }
            })
            .map((todo, index) => (
              <div id="list-container" key={todo.id}>
                <input
                  style={{ cursor: "pointer" }}
                  id="check-box"
                  type="checkbox"
                  checked={todo.status === "COMPLETED"}
                  onChange={() => handleBox(todo.id)}
                />
                <span
                  id="task-text"
                  className={
                    todo.status === "COMPLETED" ? "completed-task" : ""
                  }>
                  {todo.text}
                </span>

                <button
                  id="delete-button"
                  onClick={() => handleDeleteTask(todo.id)}>
                  Delete
                </button>
              </div>
            ))}
        </div>

        <div id="number-of-tasks-section">
          {numberOfTasks === 0 ? (
            <p id="number-of-task">No tasks yet. Add one above!</p>
          ) : (
            <p id="number-of-task">
              {numberOfCompletedTasks} of {numberOfTasks} tasks completed.
            </p>
          )}
          <button id="clearCompleted-button" onClick={handleClearCompleted}>
            Clear Completed
          </button>
        </div>
        <div id="containerFooter">
          <p id="footer">Made in Pinecone Academy</p>
        </div>
      </div>
    </div>
  );
}

export default App;

