const randomArr = document.querySelector("#random-array");
const functionButton = document.querySelector(".function");
const result = document.querySelector(".result");
const firstNumButton = document.querySelector("#first-number");
const addNumButton = document.querySelector("#add-number");
const bearButton = document.querySelector("#bear");
const reverseButton = document.querySelector("#reverse");
const highestNumButton = document.querySelector("#highest-num");
const fizzbuzzButton = document.querySelector("#fizzbuzz");
const removeNumButton = document.querySelector("#remove");
const heartButton = document.querySelector("#heart");
const heartContainer = document.querySelector(".heart-container");
const resetButton = document.querySelector("#reset");

let arr = [];
for (let i = 0; i < 10; i++) {
  let randomNum = Math.ceil(Math.random() * 100);
  arr.push(randomNum);
}

randomArr.addEventListener("click", () => {
  //make generate array buttion disapear and buttons of function appear
  randomArr.style.visibility = "hidden";
  functionButton.style.visibility = "visible";
  //create array with 10 random number
  result.textContent = "[" + arr.join(", ") + "]";
});

//get first number
firstNumButton.addEventListener("click", () => {
  result.textContent = arr[0];
});

//add a random number
addNumButton.addEventListener("click", () => {
  arr.push(Math.ceil(Math.random() * 100));
  result.textContent = "[" + arr.join(", ") + "]";
});

//replace number to bear
bearButton.addEventListener("click", () => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "🐻";
  }
  result.textContent = "[" + arr.join(", ") + "]";
});

//reverse number in array
reverseButton.addEventListener("click", () => {
  arr.reverse();
  console.log(arr);
  result.textContent = "[" + arr.join(", ") + "]";
});

//show the highest number
highestNumButton.addEventListener("click", () => {
  let newArr = arr.filter((num) => typeof num === "number");
  if (newArr.length === 0) {
    result.textContent = "[" + arr.join(", ") + "]";
    alert("Error: can't find number in the array");
  } else {
    newArr.sort();
    result.textContent = newArr[newArr.length - 1];
  }
});

//fizzbuzz button
fizzbuzzButton.addEventListener("click", () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      arr[i] = " 🫧";
    }
    if (arr[i] % 5 === 0) {
      arr[i] = "✨";
    }
  }
  result.textContent = "[" + arr.join(", ") + "]";
});

//remove a number

//create placeholder
const placeholder = document.createElement("option");
placeholder.textContent = "Remove a number!";
removeNumButton.appendChild(placeholder);
//create function to update list of options
function options() {
  removeNumButton.innerHTML = "";
  removeNumButton.appendChild(placeholder);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      const option = document.createElement("option");
      option.textContent = arr[i];
      removeNumButton.appendChild(option);
    }
  }
}
//click to see list of options
removeNumButton.addEventListener("click", () => {
  options();
});
//remove number in the array and update the list of options
removeNumButton.addEventListener("change", (e) => {
  const numToRemove = Number(e.target.value);
  const index = arr.indexOf(numToRemove);
  if (index !== -1) {
    arr.splice(index, 1);
    options();
    result.textContent = "[" + arr.join(", ") + "]";
  }
});

//create heart
heartButton.addEventListener("click", () => {
  let i = 0;
  let interval = setInterval(() => {
    heartContainer.innerHTML = "";
    if (i >= arr.length) {
      clearInterval(interval);
    }
    for (let j = 0; j < arr[i]; j++) {
      const eachHeart = document.createElement("div");
      eachHeart.textContent = "❤️";
      heartContainer.appendChild(eachHeart);
    }
    i += 1;
  }, 1000);
});

//reset array
resetButton.addEventListener("click", () => {
  arr = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.ceil(Math.random() * 100);
    arr.push(randomNumber);
  }
  result.textContent = "[" + arr.join(", ") + "]";
});
