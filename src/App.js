// Comment next 3 lines bcz it's in Input.js
import React, { useState } from "react";
import "./App.css";

import ComponentInput from "./Components/Input";
import TaskStates from "./Components/TaskStates";
function App() {
  const [filterState, setFilterState] = useState("All");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);
  const currentDate = new Date();
  console.log(todos);
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
    //200IQ code? (Bi uuruu bicheegue)
    const countCompleted = newTodos.filter(
      (todo) => todo.status === "COMPLETED"
    ).length;
    setNumberOfCompletedTasks(countCompleted);
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
        <ComponentInput
          setError={setError}
          setTodos={setTodos}
          todos={todos}
          setNumberOfTasks={setNumberOfTasks}
        />
        {error.length > 1 && <div>{error}</div>}

        <TaskStates />
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
                className={todo.status === "COMPLETED" ? "completed-task" : ""}>
                {todo.text}
              </span>

              <button
                id="delete-button"
                onClick={() => handleDeleteTask(todo.id)}></button>
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
          <p id="footer">Made in Mongolia</p>
        </div>
      </div>
    </div>
  );
}

export default App;
