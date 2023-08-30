import { useEffect, useState } from "react";
import "./Dog.css";

export default function Dog() {
  const [pictures, setPictures] = useState([]);
  async function fetchPictures() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
    const data = await res.json();
    console.log(data);
    setPictures(data.message);
  }
  useEffect(() => {
    fetchPictures();
  }, []);

  return (
    <>
      <h3>Dogs</h3>
      <p>
        Here's an API to fetch 10 random dog images:
        <a href="https://dog.ceo/api/breeds/image/random/10">
          https://dog.ceo/api/breeds/image/random/10
        </a>
      </p>
      <div className="pictures">
        {pictures.map((picture) => (
          <img key={pictures.indexOf(picture)} className="dog" src={picture} />
        ))}
      </div>
      <hr />
    </>
  );
}
