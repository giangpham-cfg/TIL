const body = document.querySelector("body");

function list(number) {
  const h1 = document.createElement("h1");
  h1.textContent = number;
  const hr = document.createElement("hr");
  body.append(h1, hr);
}

list(1);

const blueSquare = document.createElement("div");
blueSquare.setAttribute("id", "square");
body.appendChild(blueSquare);

list(2);

const image = document.createElement("img");
image.setAttribute("src", "./jd25yqv8xsf31.webp");
body.appendChild(image);
image.style.width = "300px";

list(3);

const squareContainer = document.createElement("div");
squareContainer.setAttribute("id", "square-container");
body.appendChild(squareContainer);
for (let i = 0; i < 100; i++) {
  const redSquare = document.createElement("div");
  redSquare.classList.add("red-square");
  squareContainer.appendChild(redSquare);
}

list(4);

const ghost = document.createElement("div");
ghost.textContent = "👻";
ghost.style.fontSize = "100px";
body.appendChild(ghost);
let visibility = ghost.style.visibility;
setInterval(function () {
  if (visibility === "visible") {
    visibility = "hidden";
  } else {
    visibility = "visible";
  }
  ghost.style.visibility = visibility;
}, 1000);

list(5);

const text = document.createElement("p");
text.textContent =
  "I'm a magician. If I hover over a rabbit, it will dissapear!";
const rabbitContainer = document.createElement("div");
rabbitContainer.setAttribute("id", "rabbit-container");
body.append(text, rabbitContainer);
for (let i = 0; i < 20; i++) {
  const rabbit = document.createElement("div");
  rabbit.textContent = "🐇";
  rabbit.classList.add("rabbit");
  rabbitContainer.appendChild(rabbit);
}

list(6);

const blackPart = document.createElement("div");
blackPart.setAttribute("id", "black");
let num = 20;
body.appendChild(blackPart);

let interval = setInterval(function () {
  if (num === 0) {
    body.innerHTML = "";
    for (let i = 0; i < 5000; i++) {
      const bomb = document.createElement("span");
      body.setAttribute("id", "bomb");
      bomb.textContent = "💣";
      body.appendChild(bomb);
    }
    clearInterval(interval);
  } else {
    num -= 1;
    blackPart.textContent =
      "This page will self-destruct in " + num + " seconds.";
  }
}, 1000);
