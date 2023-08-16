//Toggle the box
let box = document.querySelector("#box");
let changeBackground = true;

box.addEventListener("click", () => {
  if (changeBackground) {
    box.style.backgroundColor = "blue";
  } else {
    box.style.backgroundColor = "#ffffff";
  }
  changeBackground = !changeBackground;
});

//Mirror
let input = document.querySelector("input");
let text = document.querySelector("#text");

input.addEventListener("input", () => {
  console.log(input.value);
  text.innerText = input.value;
});

//Counter
let subtraction = document.querySelector("#subtraction");
let addition = document.querySelector("#addition");
let number = document.querySelector("#number");
let result = 0;

subtraction.addEventListener("click", () => {
  result -= 1;
  number.textContent = result;
});
addition.addEventListener("click", () => {
  result += 1;
  number.textContent = result;
});

//Race
let car = document.querySelector("#car");
let position = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    position += 20;
    car.style.marginLeft = position + "px";
  }
  if (e.key === "ArrowLeft") {
    position -= 20;
    car.style.marginLeft = position + "px";
  }
});

//Stop watch
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let clear = document.querySelector("#clear");
let second = document.querySelector("#number-seconds");
let num = 0;
let interval;

start.addEventListener("click", () => {
  interval = setInterval(() => {
    num += 1;
    second.textContent = num;
  }, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(interval);
});
clear.addEventListener("click", () => {
  clearInterval(interval);
  num = 0;
  second.textContent = num;
});
