import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid"; // ID for our tasks
import { Magixx } from "./_components/Magixx";
import { Zontix } from "./_components/Zontix";
import { Donk } from "./_components/Donk";
import { Sh1ro } from "./_components/Sh1ro";
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
      const newTodos = [
        ...todos,
        { text: inputValue, id: uuidv4(), status: "ACTIVE" },
      ];
      console.log("Updated todos:", newTodos); // Debugging
      setTodos(newTodos);
      // setTodos([
      //   ...todos,
      //   { text: inputValue, id: uuidv4(), status: "ACTIVE" },
      // ]);
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
        <Magixx
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handlePressKey={handlePressKey}
          handleAddButtonClick={handleAddButtonClick}
          error={error}
        />
        <Zontix
          filterState={filterState}
          handleFilterState={handleFilterState}
        />
        <Donk
          todos={todos}
          filterState={filterState}
          handleBox={handleBox}
          handleDeleteTask={handleDeleteTask}
        />
        <Sh1ro
          numberOfTasks={numberOfTasks}
          numberOfCompletedTasks={numberOfCompletedTasks}
          handleClearCompleted={handleClearCompleted}
        />

        <div id="containerFooter">
          <p id="footer">Made in Pinecone Academy</p>
        </div>
      </div>
    </div>
  );
}

export default App;
