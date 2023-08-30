import { useState, useEffect } from "react";
import "./Beer.css";

export default function Beer() {
  const [beers, setBeers] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState("");

  async function fetchBeers() {
    const res = await fetch("https://random-data-api.com/api/v2/beers?size=20");
    const info = await res.json();
    console.log(info);
    setBeers(info);
  }
  useEffect(() => {
    fetchBeers();
  }, []);

  const handleBeerChange = (e) => {
    setSelectedBeer(e.target.value);
  };

  return (
    <>
      <h3>Beer</h3>
      <p>
        Here's an API to fetch 20 beers:
        <a href="https://random-data-api.com/api/v2/beers?size=20">
          https://random-data-api.com/api/v2/beers?size=20
        </a>
      </p>
      <p>Choose your favorite one to see its details.</p>
      <select
        value={selectedBeer}
        onChange={handleBeerChange}
        className="select"
      >
        {beers.map((beer) => (
          <option key={beer.id} value={beer.name}>
            {beer.name}
          </option>
        ))}
      </select>
      {selectedBeer && (
        <div className="beer-details">
          <table>
            <tbody>
              {beers.map((beer) =>
                beer.name === selectedBeer ? (
                  <div className="table">
                    <tr>
                      {Object.keys(beer).map((property, index) => (
                        <th className="table-header" key={index}>
                          {property}
                        </th>
                      ))}
                    </tr>
                    <tr>
                      {Object.values(beer).map((value, index) => (
                        <td key={index}>{value}</td>
                      ))}
                    </tr>
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
