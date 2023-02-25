import { useEffect, useState } from "react";
import "./App.css";
import "./Cards.css";

type Task = {
  id: number;
  text: string;
};

function App() {
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const addNewTask = () => {
    if (userInput !== "") {
      setTasks([...tasks,
        {
          id: tasks.length + 1,
          text: userInput,
        },
      ]);
      setUserInput("");
    }
  };

  const deleteTask = (taskId: number) => {
    const index = tasks.findIndex((element) => element.id === taskId);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const changeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    console.log("tasks changed");
  }, [tasks]);

  return (
    <div className="App">
      <div className="box">
        <h1>To Do List</h1>
        <div className="wrapper-input-btn">
          <input
            className="wrapper__input"
            type="text"
            placeholder="Enter your task"
            value={userInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeUserInput(e)
            } // Save event target value
          />
          <button
            className="buttonAdd"
            type="button"
            onClick={() => addNewTask()}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>

        {tasks.map(({ text, id }) => {
          return (
            <div className="task">
              <input type="checkbox" name="packersOff" id="packers" value="1" />
              <span>{text}</span>
              <button className="buttonDelete" onClick={() => deleteTask(id)}>
                <span className="material-symbols-outlined delete">delete</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
