import "./App.css";
import monkeyImage from "./assets/jd25yqv8xsf31.webp";
import Bomb from "./components/Bomb";
// import ghostImage from "./assets/ghost.png";
import { useEffect, useState } from "react";

function App() {
  const [showBomb, setShowBomb] = useState(false);

  //logic for red boxes
  let boxes = [];
  for (let i = 0; i < 100; i++) {
    boxes.push(<div key={i} className="red-box"></div>);
  }

  //logic for rabbit
  let rabbits = [];
  for (let i = 0; i < 20; i++) {
    rabbits.push(
      <div key={i} className="rabbit">
        🐇
      </div>
    );
  }

  //logic for ghost
  const [ghost, setGhost] = useState("ghost");
  useEffect(() => {
    let interval = setInterval(() => {
      if (ghost === "ghost") {
        setGhost("no-ghost");
      } else {
        setGhost("ghost");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [ghost]);

  //logic for counting seconds and making page of bombs appears
  const [second, setSecond] = useState(20);
  useEffect(() => {
    let interval = setInterval(() => {
      if (second === 0) {
        setShowBomb(true);
      } else {
        setSecond(second - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [second]);

  return (
    <>
      {showBomb ? (
        <Bomb /> //use Bomb component to render page of bombs if showBomb is true
      ) : (
        <>
          <div>
            <h1>1</h1>
            <hr />
            <div className="blue-box"></div>
          </div>
          <div>
            <h1>2</h1>
            <hr />
            <img src={monkeyImage} className="monkey" alt="Monkey" />
          </div>
          <div>
            <h1>3</h1>
            <hr />
            <div className="box-container">{boxes}</div>
          </div>
          <div>
            <h1>4</h1>
            <hr />
            <div className={`ghost-container ${ghost}`}>👻</div>
          </div>
          <div>
            <h1>5</h1>
            <hr />
            <div className="rabbit-container">{rabbits}</div>
          </div>
          <div>
            <h1>6</h1>
            <hr />
            <div className="black-part">
              This page will self-destruct in {second} seconds
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
