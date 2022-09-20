const header = document.getElementById("fixed");

const dash = "-----";
const headerLine =
  "+" + dash.repeat(3) + "+" + dash.repeat(4) + "+" + dash.repeat(15) + "+<br>";
header.innerHTML += headerLine;

const shop = document.getElementById("shop");

export function simulate() {
  // genrate the radom number
    let random = Math.floor(Math.random() * 4);

  // get event corresponding to the random number
    

  // perform the event on the shop data Structure

  // get state of the shop

  //display shop
  displayShop(
    "1",
    "------------",
    "[ ----------- ----------- ------------ ------------ -----------]"
  );
}

function displayShop(random, event, shopState) {
  let newLine = `<div class="row">
         <div class="random">${random} ---------->  </div>
        <div class="event">${event}</div>
        <div class="status">${shopState}</div>
        </div>
    `;
  shop.innerHTML += newLine;
}

window.onload = init();

function init() {
  let button = document.getElementById("simulate-btn");
  button.addEventListener("click", simulate);
}
