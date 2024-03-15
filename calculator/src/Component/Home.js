//creating a simple calculator using react hooks
import React, { useState, useRef } from "react";

export default function Home() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);

  const inputRef = useRef(null);

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setResult(parseInt(result) + parseInt(input));

    setInput("");
    inputRef.current.focus();
  };
  const handleClearInput = (e) => {
    setInput(0);
    setResult(0);
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Simple Calculator</h1>
      <h2>{result}</h2>
      <form>
        <input
          type="text"
          id="input"
          value={input}
          onChange={handleInput}
          ref={inputRef}
        ></input>
        <br />
        <h1>Result: {result}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClearInput}>Clear Input</button>
        {/* <button onClick={handleSub}>Subtract</button>
        <button onclick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button> */}
      </form>
      <div></div>
    </div>
  );
}
