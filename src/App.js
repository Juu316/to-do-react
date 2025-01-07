import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// function App() {
//   const [todo, setTodo] = useState([]);
//   const [error, setError] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const [filterState, setFilterState] = useState("");
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   const handleAddButton = () => {
//     if (inputValue.length === 0) {
//       setError("Please enter todo task");
//       return;
//     } else {
//       setError("");
//       setTodo([...todo, { text: inputValue, id: uuidv4(), status: "ACTIVE" }]);
//     }
//   };
//   const handleFilterState = (e) => {
//     setFilterState(e.target.value);
//   };
//   const handleBox = (id) => {
//     const newTodos = todo.map((todo) => {
//       if (todo.id === id) {
//         return {
//           ...todo,
//           status: todo.status === "ACTIVE" ? "COMPLETED" : "ACTIVE",
//         };
//       }
//       return todo;
//     });
//   };
//   // --------Tried DOM here------------
//   // function createTask() {
//   //   let newTask = document.createElement("div");
//   //   newTask.innerHTML = { inputValue };
//   //   let div = document.getElementById("tasks");
//   //   div.appendChild(newTask);
//   // }
//   return (
//     <div className="App">
//       <div className="Main">
//         <div className="title">To-Do List</div>
//         <div className="containerOfTextAndButton">
//           <input
//             value={inputValue}
//             placeholder="Type"
//             onChange={handleInputChange}
//           />
//           {error.length > 1 && <div>{error}</div>}
//           <button className="addButton" onClick={handleAddButton}>
//             <span className="plus">+</span>
//           </button>
//         </div>
//         <div className="stateButtons">
//           <div
//             id="allB"
//             style={{ color: filterState === "ALL" ? "red" : "green" }}
//             onClick={() => {
//               handleFilterState("ALL");
//             }}>
//             All
//           </div>
//           <div
//             onClick={() => {
//               handleFilterState("ACTIVE");
//             }}
//             id="activeB">
//             Active
//           </div>
//           <div
//             onClick={() => {
//               handleFilterState("COMPLETED");
//             }}
//             id="completedB">
//             Completed
//           </div>
//         </div>
//         {todo
//           .filter((todo) => {
//             if (filterState === "ALL") {
//               return true;
//             } else {
//               return todo.status === filterState;
//             }
//           })
//           .map((todo) => (
//             <div key={todo.id}>
//               <input
//                 type="checkbox"
//                 onChange={() => {
//                   handleBox(todo.id);
//                 }}
//               />
//               {todo.text}
//             </div>
//           ))}

//         <div id="tasks"></div>

//         <footer>Powered by me XD</footer>
//       </div>
//     </div>
//   );
// }
const todo = {
  text: "text",
  status: "active" | "completed",
  id: 1,
};
function App() {
  const [inputValue, setInputValue] = useState("");
  const [currentState, setCurrentState] = useState("active");
  const [error, setError] = useState("");
  const [todo, setTodo] = useState([]);
  // const handleAddButtonClick = () => {
  //   if (inputValue.length === 0) {
  //     setError("Please Enter Task");
  //     return;
  //   } else {
  //     setError("");
  //     setTodos([
  //       ...todos,
  //       { text: inputValue, id: uuidv4(), status: "ACTIVE" },
  //     ]);
  //     setInputValue("");
  //     setNumberOfTasks(numberOfTasks + 1);
  //   }
  // };
  const handleAddButton = () => {
    if (inputValue.length === 0) {
      setError("Please enter todo task");
      return;
    } else {
      setError("");
      setTodo([...todo, { text: inputValue, id: uuidv4(), status: "active" }]);
      setInputValue("");
    }
  };
  const handleBox = (id) => {
    const qwerty = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === "active" ? "completed" : "active",
        };
      }
      return todo;
    });
  };
  //// Function uudaa "do" avj nerlelee, "do "-eer ehelj baival function gsn ug
  function testing() {
    if (true) {
      console.log("If is working here");
    }
  }
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  };
  function doInputValue(utga) {
    setInputValue(utga.target.value);
  }
  function doCurrentState() {
    if (currentState === "active") {
      setCurrentState("completed");
    }
    if (currentState === "completed") {
      setCurrentState("active");
    }
    console.log(currentState);
  }
  function createDiv() {}

  return (
    <div className="App">
      <div className="Container">
        <div className="Mainpart">
          <div className="garchig">To-Do List</div>
          <form className="form1">
            <input
              onChange={doInputValue}
              value={inputValue}
              placeholder="Add a new task..."
              className="input1"></input>
            <button onClick={handleAddButton} className="addButton">
              Add
            </button>
          </form>
          <div className="states">
            <button className="buttonAll">all</button>
            <button className="buttonActive">active</button>
            <button className="buttonCompleted">completed</button>
          </div>
          {todo
            // .filter((todo) => {
            //   if (filterState === "ALL") {
            //     return true;
            //   } else {
            //     return todo.status === filterState;
            //   }
            // })
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
          <div className="footer">Made in Mongolia</div>
        </div>
      </div>
    </div>
  );
}
export default App;
