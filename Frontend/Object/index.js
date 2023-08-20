const cow = document.querySelector(".cow");
const bottleNum = document.querySelector("#bottle-num");
const sellButton = document.querySelector("#sell");
const moneyOwned = document.querySelector("#money");
const producersChoice = document.querySelector(".producers-choice");
const eachProducerPresent = document.querySelector(".each-producer");
let num = 0;
let money = 0;
let totalMoney = 0;
//create an array named producers contains objects presenting each producer
let producers = [
  {
    id: 1,
    name: "Worker",
    price: 25,
    bottlePerSecond: 1,
    quantity: 0,
    icon: "👨🏻‍🌾",
  },
  {
    id: 2,
    name: "Extra cow",
    price: 40,
    bottlePerSecond: 2,
    quantity: 0,
    icon: "🐄",
  },
  {
    id: 3,
    name: "Milk farm",
    price: 150,
    bottlePerSecond: 5,
    quantity: 0,
    icon: "🚜",
  },
  {
    id: 4,
    name: "Milk company",
    price: 1000,
    bottlePerSecond: 100,
    quantity: 0,
    icon: "🏭",
  },
  {
    id: 5,
    name: "Milk country",
    price: 50000,
    bottlePerSecond: 1000,
    quantity: 0,
    icon: "🗺",
  },
  {
    id: 6,
    name: "Milk Planet",
    price: 1000000,
    bottlePerSecond: 1000000,
    quantity: 0,
    icon: "🪐",
  },
];

//create fuction to render number of milk bottle and money
function bottleUpdate() {
  let moneyFormat = money.toFixed(2);
  bottleNum.textContent = num;
  sellButton.style.visibility = "visible";
  sellButton.textContent = `Sell Milk + $${moneyFormat}`;
  if (num === 0) {
    sellButton.style.visibility = "hidden";
  } else {
    sellButton.style.visibility = "visible";
  }
}

function moneyUpdate() {
  let moneyFormat = totalMoney.toFixed(2);
  moneyOwned.textContent = `$${moneyFormat}`;
}

//click on cow button
cow.addEventListener("click", () => {
  num += 1;
  money += 0.5;
  bottleUpdate();
});

//click on sell milk button
sellButton.addEventListener("click", () => {
  num = 0;
  bottleUpdate();
  totalMoney += money;
  moneyUpdate();
  money = 0;
  producerOption();
});
//Make options for producers appear
function producerOption() {
  producersChoice.replaceChildren();
  eachProducerPresent.replaceChildren();
  for (let producer of producers) {
    const div = document.createElement("div");
    div.setAttribute("class", "each-producer-container");
    const iconAndQuantity = document.createElement("p");
    iconAndQuantity.setAttribute("id", "icon-quantity");
    const bottlePerSec = document.createElement("span");
    bottlePerSec.setAttribute("id", "bottle-produce");
    iconAndQuantity.textContent = `${producer.icon} ${producer.quantity}`;
    bottlePerSec.textContent = `+${producer.bottlePerSecond} bottles/sec`;
    div.append(iconAndQuantity, bottlePerSec);
    if (producer.quantity <= 0) {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
    eachProducerPresent.appendChild(div);

    if (totalMoney >= producer.price) {
      let eachProducer = document.createElement("button");
      eachProducer.setAttribute("class", "producer-button");
      eachProducer.textContent = `${producer.name} - $${producer.price.toFixed(
        2
      )}`;
      producersChoice.appendChild(eachProducer);

      //make each button of producers works
      eachProducer.addEventListener("click", () => {
        producer.quantity += 1;
        totalMoney -= producer.price;
        if (totalMoney < 0) {
          totalMoney = 0;
        }
        producerOption();
        moneyUpdate();
      });
    }
  }
}

setInterval(() => {
  for (let producer of producers) {
    num += producer.quantity * producer.bottlePerSecond;
    money = num * 0.5;
    producerOption();
    bottleUpdate();
  }
}, 1000);
