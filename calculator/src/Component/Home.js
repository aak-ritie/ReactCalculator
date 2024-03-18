import { useState, useRef } from "react";
import "../App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    if (result === 0) {
      setResult(() => Number(inputRef.current.value));
    } else {
      setResult(() => result - Number(inputRef.current.value));
    }
  }

  function times(e) {
    e.preventDefault();
    if (result === 0) {
      setResult(() => Number(inputRef.current.value));
    } else {
      setResult((result) => result * Number(inputRef.current.value));
    }
  }

  function divide(e) {
    e.preventDefault();
    if (result === 0) {
      setResult(() => Number(inputRef.current.value));
    } else {
      setResult((result) => result / Number(inputRef.current.value));
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="card ps-4 " style={{ width: "24rem" }}>
          <h1 className="mt-2">Simple Calculator</h1>
          <form className="container mb-2 mt-2">
            <p ref={resultRef}>Result : {result}</p>
            <input
              pattern="[0-9]"
              ref={inputRef}
              type="number"
              placeholder="Type a number"
            />
            <br />
            <button
              type="button"
              className=" btn btn-primary me-2 mb-2"
              onClick={plus}
            >
              add
            </button>
            <button
              type="button"
              className=" btn btn-primary me-2 mb-2"
              onClick={minus}
            >
              subtract
            </button>
            <button
              type="button"
              className="btn btn-primary me-2 mb-2"
              onClick={times}
            >
              multiply
            </button>
            <button
              type="button"
              className="btn btn-primary me-2 mb-2"
              onClick={divide}
            >
              divide
            </button>
            <button
              type="button"
              className="btn btn-danger me-2 mb-2"
              onClick={resetInput}
            >
              reset input
            </button>
            <button
              type="button"
              className="btn btn-danger me-2 mb-2"
              onClick={resetResult}
            >
              reset result
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
