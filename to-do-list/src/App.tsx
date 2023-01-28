import { useState } from "react";
import "./App.css";
import "./Cards.css";

type Task = {
  id: number;
  text: string;
};

const tasks: Task[] = [
  {
    id: 1,
    text: "milk",
  },
  {
    id: 2,
    text: "bread",
  },
  {
    id: 3,
    text: "sugar",
  },
];

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1>To Do List</h1>
        <div className="wrapper-input-btn">
          <input
            className="wrapper__input"
            type="text"
            placeholder="Enter your task"
          ></input>
          <button>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        {tasks.map(({ text }) => {
          return <div className="task">{text}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
