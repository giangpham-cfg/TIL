import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //toggle the box
  const [isBlue, setIsBlue] = useState(false);

  //mirror
  const [text, setText] = useState("");

  //counter
  const [num, setNum] = useState(0);

  //race
  const [position, setPosition] = useState(0);
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setPosition(position + 20);
    }
    if (e.key === "ArrowLeft") {
      setPosition(position - 20);
    }
  };

  //stopwatch
  const [second, setSecond] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    if (isCounting) {
      let interval = setInterval(() => {
        setSecond(second + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [second, isCounting]);

  return (
    <div onKeyDown={handleKeyDown}>
      <h1>Day 10</h1>
      <hr />

      <div>
        <h1>Toggle the Box</h1>
        <div
          className={`box ${isBlue ? "blue" : ""}`}
          onClick={() => setIsBlue(!isBlue)}
        ></div>
        <hr />
      </div>

      <div>
        <h1>Mirror</h1>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <div className="text">{text}</div>
        <hr />
      </div>

      <div>
        <h1>Counter</h1>
        <button onClick={() => setNum(num - 1)}>-</button>
        <span id="number">{num}</span>
        <button onClick={() => setNum(num + 1)}>+</button>
        <hr />
      </div>

      <div>
        <h1>Race</h1>
        <p>Move car to the right by pressing the right arrow</p>
        <div
          id="car"
          style={{ marginLeft: `${position}px` }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          🏎
        </div>
        <hr />
      </div>

      <div>
        <h1>Stopwatch</h1>
        <div id="watch">
          <span id="number-seconds">{second}</span>seconds
        </div>
        <button onClick={() => setIsCounting(true)}>Start</button>
        <button id="stop" onClick={() => setIsCounting(false)}>
          Stop
        </button>
        <button onClick={() => setSecond(0)}>Clear</button>
      </div>
    </div>
  );
}

export default App;
