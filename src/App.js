// import "./App.css";
// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// // function App() {
// //   const [todo, setTodo] = useState([]);
// //   const [error, setError] = useState("");
// //   const [inputValue, setInputValue] = useState("");
// //   const [filterState, setFilterState] = useState("");
// //   const handleInputChange = (e) => {
// //     setInputValue(e.target.value);
// //   };
// //   const handleAddButton = () => {
// //     if (inputValue.length === 0) {
// //       setError("Please enter todo task");
// //       return;
// //     } else {
// //       setError("");
// //       setTodo([...todo, { text: inputValue, id: uuidv4(), status: "ACTIVE" }]);
// //     }
// //   };
// //   const handleFilterState = (e) => {
// //     setFilterState(e.target.value);
// //   };
// //   const handleBox = (id) => {
// //     const newTodos = todo.map((todo) => {
// //       if (todo.id === id) {
// //         return {
// //           ...todo,
// //           status: todo.status === "ACTIVE" ? "COMPLETED" : "ACTIVE",
// //         };
// //       }
// //       return todo;
// //     });
// //   };
// //   // --------Tried DOM here------------
// //   // function createTask() {
// //   //   let newTask = document.createElement("div");
// //   //   newTask.innerHTML = { inputValue };
// //   //   let div = document.getElementById("tasks");
// //   //   div.appendChild(newTask);
// //   // }
// //   return (
// //     <div className="App">
// //       <div className="Main">
// //         <div className="title">To-Do List</div>
// //         <div className="containerOfTextAndButton">
// //           <input
// //             value={inputValue}
// //             placeholder="Type"
// //             onChange={handleInputChange}
// //           />
// //           {error.length > 1 && <div>{error}</div>}
// //           <button className="addButton" onClick={handleAddButton}>
// //             <span className="plus">+</span>
// //           </button>
// //         </div>
// //         <div className="stateButtons">
// //           <div
// //             id="allB"
// //             style={{ color: filterState === "ALL" ? "red" : "green" }}
// //             onClick={() => {
// //               handleFilterState("ALL");
// //             }}>
// //             All
// //           </div>
// //           <div
// //             onClick={() => {
// //               handleFilterState("ACTIVE");
// //             }}
// //             id="activeB">
// //             Active
// //           </div>
// //           <div
// //             onClick={() => {
// //               handleFilterState("COMPLETED");
// //             }}
// //             id="completedB">
// //             Completed
// //           </div>
// //         </div>
// //         {todo
// //           .filter((todo) => {
// //             if (filterState === "ALL") {
// //               return true;
// //             } else {
// //               return todo.status === filterState;
// //             }
// //           })
// //           .map((todo) => (
// //             <div key={todo.id}>
// //               <input
// //                 type="checkbox"
// //                 onChange={() => {
// //                   handleBox(todo.id);
// //                 }}
// //               />
// //               {todo.text}
// //             </div>
// //           ))}

// //         <div id="tasks"></div>

// //         <footer>Powered by me XD</footer>
// //       </div>
// //     </div>
// //   );
// // }
// const todo = {
//   text: "text",
//   status: "active" | "completed",
//   id: 1,
// };
// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [currentState, setCurrentState] = useState("active");
//   const [error, setError] = useState("");
//   const [todo, setTodo] = useState([]);
//   // const handleAddButtonClick = () => {
//   //   if (inputValue.length === 0) {
//   //     setError("Please Enter Task");
//   //     return;
//   //   } else {
//   //     setError("");
//   //     setTodos([
//   //       ...todos,
//   //       { text: inputValue, id: uuidv4(), status: "ACTIVE" },
//   //     ]);
//   //     setInputValue("");
//   //     setNumberOfTasks(numberOfTasks + 1);
//   //   }
//   // };
//   const handleAddButton = () => {
//     if (inputValue.length === 0) {
//       setError("Please enter todo task");
//       return;
//     } else {
//       setError("");
//       setTodo([...todo, { text: inputValue, id: uuidv4(), status: "active" }]);
//       setInputValue("");
//     }
//   };
//   const handleBox = (id) => {
//     const qwerty = todo.map((todo) => {
//       if (todo.id === id) {
//         return {
//           ...todo,
//           status: todo.status === "active" ? "completed" : "active",
//         };
//       }
//       return todo;
//     });
//   };
//   //// Function uudaa "do" avj nerlelee, "do "-eer ehelj baival function gsn ug
//   function testing() {
//     if (true) {
//       console.log("If is working here");
//     }
//   }
//   const handleEnter = (event) => {
//     if (event.key === "Enter") {
//       handleAddButtonClick();
//     }
//   };
//   function doInputValue(utga) {
//     setInputValue(utga.target.value);
//   }
//   function doCurrentState() {
//     if (currentState === "active") {
//       setCurrentState("completed");
//     }
//     if (currentState === "completed") {
//       setCurrentState("active");
//     }
//     console.log(currentState);
//   }
//   function createDiv() {}

//   return (
//     <div className="App">
//       <div className="Container">
//         <div className="Mainpart">
//           <div className="garchig">To-Do List</div>
//           <form className="form1">
//             <input
//               onChange={doInputValue}
//               value={inputValue}
//               placeholder="Add a new task..."
//               className="input1"></input>
//             <button onClick={handleAddButton} className="addButton">
//               Add
//             </button>
//           </form>
//           <div className="states">
//             <button className="buttonAll">all</button>
//             <button className="buttonActive">active</button>
//             <button className="buttonCompleted">completed</button>
//           </div>
//           {todo
//             // .filter((todo) => {
//             //   if (filterState === "ALL") {
//             //     return true;
//             //   } else {
//             //     return todo.status === filterState;
//             //   }
//             // })
//             .map((todo) => (
//               <div key={todo.id}>
//                 <input
//                   type="checkbox"
//                   onChange={() => {
//                     handleBox(todo.id);
//                   }}
//                 />
//                 {todo.text}
//               </div>
//             ))}
//           <div className="footer">Made in Mongolia</div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////
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
  const currentDate = new Date();

  const [loog, setLoog] = useState({});
  // Input uurchluhud heregtei
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // Ene hesgiig uuruu 100% oilgohgui bgaa bolno
  const handleAddButtonClick = () => {
    if (inputValue.length === 0) {
      setError("Please Enter Task...");
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
  // Press enter and see it for yourself :)
  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      handleAddButtonClick();
    }
  };
  //big chunk of function xD, state iig n ugj bgaa suuliin heseg n
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
  // Ym l bol () dotor e bichdeg bolchloo ahahah ug n event gej bagsh helj ugsn tgd 5 usgen deer goloo tsohih ym bnshdee
  //comment edriig 2,3 muruur n bichnee harin
  const handleFilterState = (e) => {
    setFilterState(e);
  };

  // Ene hesgiig ctrl+c ctrl+v hiisen bolno
  const handleDeleteTask = (id) => {
    const currentTodos = todos.filter((todo) => todo.id !== id);

    setTodos(currentTodos);

    setNumberOfTasks(numberOfTasks - 1);
    //Butsaagaad too n uurchlugdunu ustgah uyd
    const deletedTask = todos.find((todo) => todo.id === id);
    if (deletedTask && deletedTask.status === "COMPLETED") {
      setNumberOfCompletedTasks(numberOfCompletedTasks - 1);
    }
  };
  // Active tasknii too aldaagui soligdono, completed n 0 bolno, active n ustgagdahgui
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
          <button id="activity-log-button">Activity log</button>
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
