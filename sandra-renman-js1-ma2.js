// Question 1

const myFunctionExpression = function() {
  console.log("Sandra");
};

// Question 2

const button = document.querySelector(".btn");

function callAfterClick() {
  console.log("I was clicked!");
}

button.addEventListener("click", callAfterClick);

// Question 3

const textInput = document.querySelector(".input#firstName");

function callWhenKeyIsPressed(event) {
  console.dir(event.key);
}

textInput.addEventListener("keydown", callWhenKeyIsPressed);

// Question 4

const hoverButton = document.querySelector("button");

function addClassOnHover(event) {
  event.target.classList.add("hover");
}

hoverButton.addEventListener("mouseover", addClassOnHover);

// Question 5

const stopHoverButton = document.querySelector("[data-animal='dog']");

function removeClass(event) {
  event.target.classList.remove("hover");
}

stopHoverButton.addEventListener("mouseout", removeClass);

// Question 6

const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseover", logValue);
}

function logValue(event) {
  console.log(event.target.dataset);
}

// Question 7

const animal = "cow";

// if(animal === "cat") {
//     console.log("Meow");
// }
// else if(animal === "cow") {
//     console.log("Moo");
// }
// else if(animal === "bird") {
//     console.log("Tweet");
// }
// else {
//     console.log("Harrumph");
// }

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

// Question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(item) {
  console.log(item);
});

// Question 9

function helloTimer() {
  console.log("Hello!");

  if (counter === 5) {
    clearInterval(interval);
  }
  counter++;
}
let counter = 0;
const interval = setInterval(helloTimer, 500);

// Question 10

const divContainer = document.querySelector(".container");

function textUpdate() {
  divContainer.innerHTML = "Text updated";
}

setTimeout(textUpdate, 2000);
