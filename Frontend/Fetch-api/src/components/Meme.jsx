import { useState, useEffect } from "react";
import "./Meme.css";

export default function Meme() {
  const [memes, setMemes] = useState([]);
  async function fetchMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const info = await res.json();
    console.log(info);
    setMemes(info.data.memes);
  }
  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <>
      <h3>Memes</h3>
      <p>
        Here's an API to fetch random memes:
        <a href="https://api.imgflip.com/get_memes">
          https://api.imgflip.com/get_memes
        </a>
      </p>
      <div className="memes">
        {memes.map((meme) => (
          <img key={meme.id} className="meme" src={meme.url} />
        ))}
      </div>
      <hr />
    </>
  );
}
