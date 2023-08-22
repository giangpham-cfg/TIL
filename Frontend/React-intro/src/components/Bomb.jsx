import "./Bomb.css";

function Bomb() {
  let bombs = [];
  for (let i = 0; i < 5000; i++) {
    bombs.push(
      <div key={i} className="bomb">
        💣
      </div>
    );
  }
  return <div className="bomb-container">{bombs}</div>;
}
export default Bomb;
