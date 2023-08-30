import "./App.css";
import Beer from "./components/Beer";
import Dog from "./components/Dog";
import Meme from "./components/Meme";
import SearchPokemon from "./components/SearchPokemon";

function App() {
  return (
    <>
      <h1>Can you catch them all?</h1>
      <Dog />
      <Meme />
      <SearchPokemon />
      <Beer />
    </>
  );
}

export default App;
