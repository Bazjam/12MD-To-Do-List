import { useState } from "react";
import "./App.css";
import "./Cards.css";

type Task = {
  id: number;
  text: string;
};

const defaultTasks: Task[] = [
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
  
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [userInput, setUserInput] = useState<string>("");

  const testFunction = () => {
    setTasks([
      ...tasks, // rewrite old [{}] to new [{}] with new data
      {
        id:tasks.length +1,
        text: userInput
      }
    ])
  }

  const userInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)//!!!!!!!
    // e.target.value = "";
    
  }

  return (
    <div className="App">
      <div className="box">
        <h1>To Do List</h1>
        <div className="wrapper-input-btn">
          <input
            className="wrapper__input"
            type="text"
            placeholder="Enter your task"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => userInputs(e)} // Save event target value
          />
          <button type="button" onClick={() => testFunction()}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        {tasks.map(({ text }) => {
          return (
          <div className="task">{text}</div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
