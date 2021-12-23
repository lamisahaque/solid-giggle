/* 
Instructions: when a user clicks on one of the colored dots, the background color of the entire page changes to match that dot. You should
 not need to change any HTML or CSS. 
Hint: Classes for each color have already been defined in the CSS tab.
*/
let text = document.querySelector("body");

// 1 -- Select the parent of the items you want to click
let circles = document.querySelector("ul");
console.log(circles);

// 3 -- Write an event handler to change the color of the page when each circle is pressed.
function changeBackgroundColor(event) {
  console.log(event.target);
}

// 2 -- Add an event listener to each circle
circles.addEventListener("click", changeBackgroundColor);



let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");
let blueButton = document.getElementById("blueButton");
let yellowButton = document.getElementById("yellowButton");
let resetButton = document.getElementById("resetButton");

function redScheme() {
  document.body.style.backgroundColor = "#ffaaaa";
  document.getElementById("text").style.color = "#ffaaaa";
}

function greenScheme() {
  document.body.style.backgroundColor = "rgb(176, 255, 176)";
  document.getElementById("text").style.color = "rgb(176, 255, 176)";
}

function blueScheme() {
  document.body.style.backgroundColor = "rgb(170, 235, 255)";
  document.getElementById("text").style.color = "rgb(170, 235, 255)";
}

function yellowScheme() {
  document.body.style.backgroundColor = "rgb(255, 255, 162)";
  document.getElementById("text").style.color = "rgb(255, 255, 162)";
}

function resetScheme() {
  document.body.style.bagroundColor = "rgb(255, 255, 255)";
  document.getElementById("text").style.color = "rgb(255, 255, 255)";
}

redButton.addEventListener("click", redScheme);
greenButton.addEventListener("click", greenScheme);
blueButton.addEventListener("click", blueScheme);
yellowButton.addEventListener("click", yellowScheme);
resetButton.addEventListener("click", resetScheme);