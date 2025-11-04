const container = document.querySelector(".container");
var width = container.offsetWidth;
console.log(width);
createBoxes(10, width);
var Rand = true;
var Black = false;
var Erase = false;
function randClick() {
  Rand = true;
  Black = false;
  Erase = false;
}
function blackClick() {
  Rand = false;
  Black = true;
  Erase = false;
}
function eraseClick() {
  Rand = false;
  Black = false;
  Erase = true;
}
function resizeClick() {
  var row = parseInt(prompt("How many pixels do you want in one row/column?"));
  createBoxes(row, width);
}
function createBoxes(limit, width) {
  var size = ((width/limit));
  container.innerHTML = "";
  for (let i = 1; i <= limit * limit; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    // console.log("Attribute set");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    // console.log(`added width and height ${size}`);
    container.appendChild(box);
  }

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.background = Whichcolour();
    box.style.transform = "scale(1.1)";
    box.style.transition = "all 0.3s ease";
  });
  
  box.addEventListener("mouseout", () => {
    box.style.transition = "all 0.3s ease";
    box.style.transform = "scale(1)";
  });
});}
function Whichcolour() {
  if (Rand == true) {
    return RandomColor();
  } else if (Black == true) {
    return `rgb(0,0,0)`;
  } else if (Erase == true) {
    return Eraser();
  }
}
function RandomColor() {
  var red = 255 * Math.random();
  var blue = 255 * Math.random();
  var green = 255 * Math.random();
  return `rgb(${red},${blue},${green})`;
}
function Eraser() {
  var bgColor = container.style.background;
  return bgColor;
}
