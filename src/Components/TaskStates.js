import React, { useState } from "react";

const TaskStates = () => {
  const [filterState, setFilterState] = useState("All");
  const handleFilterState = (e) => {
    setFilterState(e);
  };
  return (
    <>
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
        <button id="activity-log-button">Activity log</button>
      </div>
    </>
  );
};

export default TaskStates;
