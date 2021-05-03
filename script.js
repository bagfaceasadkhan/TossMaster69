// Getting all the elements

const section = document.querySelector(".section");
const result = document.querySelector(".result");
const header = document.querySelector(".output");
const button = document.querySelector("button");

// Functions

// Random Number 0 or 1
function randomNumber() {
  const random = Math.floor(Math.random() * 2);
  checkOddOrEve(random);
}

// assing odd or eve

function checkOddOrEve(random) {
  let output = random == 1 ? "ODD" : "EVEN";
  const wait = function (seconds) {
    return new Promise((resolve, rejecct) => {
      setTimeout(resolve, seconds * 1000);
    });
  };
  wait(0)
    .then((result) => {
      renderLoader();
      return wait(3);
    })
    .then((result) => {
      renderHtml(output);
    });
}

//Render Loader

function renderLoader() {
  header.textContent = "...WAIT...";
}

// Render to html

function renderHtml(output) {
  header.textContent = output;
}

// Adding Event Listners

button.addEventListener("click", randomNumber);
