import React from "react";
export const Donk = ({ todos, filterState, handleBox, handleDeleteTask }) => {
  return (
    <>
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
                onClick={() => handleDeleteTask(todo.id)}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
};
