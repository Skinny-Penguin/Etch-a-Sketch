const container = document.querySelector(".container");
createBoxes(40);

function createBoxes(size){
    for(let i=1; i<= 256 ; i++){
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.style.width= `${size}px`;
        box.style.height = `${size}px`;
        container.appendChild(box);
    }
}
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.background = RandomColor;
        box.style.transform = "scale(1.1)";
        box.style.transition = "all 0.3s ease";
    });
    
    box.addEventListener("mouseout", () => {
        box.style.transform = "scale(1)";
    });
});
function RandomColor(){
    var red = 255*Math.random();
    var blue = 255*Math.random();
    var green = 255*Math.random();
    return `rgb(${red},${blue},${green})`

}