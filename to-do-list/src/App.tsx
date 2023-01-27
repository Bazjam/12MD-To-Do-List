import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  return (
    <div className="App">
      <br></br>
      <input
        placeholder="Enter first number"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFirstNumber(parseInt(e.target.value))
        }
        ></input>
      <br></br>
      <span>{firstNumber}</span>
      <br></br>
      <input
        placeholder="Enter second number"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSecondNumber(parseInt(e.target.value))
        }
        ></input>
      <br></br>
      <br></br>
      <span>{secondNumber}</span>
      <br></br>
      <br></br>
      <button onClick={() => setResult(firstNumber + secondNumber)}> + </button>
      <br></br>
      <button onClick={() => setResult(firstNumber - secondNumber)}> - </button>
      <br></br>
      <button onClick={() => setResult(firstNumber * secondNumber)}> * </button>
      <br></br>
      <button onClick={() => setResult(firstNumber / secondNumber)}> / </button>
      <br></br><br></br>
      <span>{result}</span>
    </div>
  );
}

export default App;
