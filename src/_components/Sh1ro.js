import React from "react";
import "../App.css";
import "../index.css";
export const Sh1ro = ({ numberOfTasks, numberOfCompletedTasks, handleClearCompleted }) => {
  return (
    <>
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
    </>
  );
};
