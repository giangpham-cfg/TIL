import { useState, useEffect } from "react";
import "./SearchPokemon.css";

export default function SearchPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [filterPokemons, setFilterPokemons] = useState([]);
  const [showPokemon, setShowPokemon] = useState("ditto");
  const [showSearchResult, setShowSearchResult] = useState(true);
  const [picture, setPicture] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  );
  const [searchValue, setSearchValue] = useState("");

  console.log("showPokemon", showPokemon);

  async function fetchPokemons() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const info = await res.json();
    console.log(info);
    setPokemons(info.results);
  }
  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemonPicture(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const info = await res.json();
    console.log(info);
    setPicture(info.sprites.front_default);
  }
  useEffect(() => {
    fetchPokemonPicture(showPokemon);
  }, [showPokemon]);

  const handleFilterPokemons = (e) => {
    setShowSearchResult(true);
    const search = e.target.value.toLowerCase();
    setSearchValue(search);
    const newFilterPokemons = pokemons.filter((value) => {
      return checkName(value.name, search);
    });
    if (search === "") {
      setFilterPokemons([]);
    } else {
      setFilterPokemons(newFilterPokemons);
    }
  };

  const checkName = (name, input) => {
    return name.startsWith(input);
  };

  const handleSearchButton = () => {
    for (let pokemon of pokemons) {
      if (pokemon.name === searchValue) {
        setShowPokemon(pokemon.name);
        setShowSearchResult(false);
        return;
      }
    }
    return setShowPokemon("No matching result");
  };
  return (
    <>
      <h3>Pokemon</h3>
      <p>
        Here's a pokemon api:
        <a href="https://pokeapi.co/api/v2/pokemon/ditto">
          https://pokeapi.co/api/v2/pokemon/ditto
        </a>
      </p>
      <p>
        You have to replace the text "ditto" with the name of the pokemon you
        want to search for.
      </p>
      <div>
        <input
          type="text"
          placeholder="Enter Pokemon name..."
          onChange={handleFilterPokemons}
        />
        <button onClick={handleSearchButton}>Search</button>
      </div>
      <div className="filter-result">
        {filterPokemons.map((pokemon, id) => (
          <div
            className={showSearchResult ? "show-result" : "hide-result"}
            key={id}
          >
            {pokemon.name}
          </div>
        ))}
      </div>
      <h4>{showPokemon}</h4>
      <img src={picture} alt={showPokemon} />
      <hr />
    </>
  );
}
