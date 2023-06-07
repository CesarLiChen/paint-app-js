const canvas = document.querySelector(".canvas");
const clearBtn = document.querySelector(".clear");
const shapes = document.querySelector(".shapes");
const colorBtn = document.querySelector(".color");

let isDrawing = false;
let shape = "circleOption"; // Default shape
let color = "black";

canvas.addEventListener("mousedown", (event) => {
    console.log("Drawing..");
    paintSpot(event.pageX, event.pageY);
    isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
    console.log("mouse upped");
    isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
    console.log("Stopped drawing")
    isDrawing = false;
});

canvas.addEventListener("mousemove", (event) => {
    if (isDrawing) paintSpot(event.pageX, event.pageY);
});

clearBtn.addEventListener("click", () => {
    console.log("Clear pressed");
    canvas.textContent = "";
});

shapes.addEventListener("click", (event) => {
    console.log(event.target.className);
    if(event.target.className != "shapes") shape = event.target.className;
});

colorBtn.addEventListener("change", (event) => {
    console.log(event.target.value);
    color = event.target.value;
    for(let i = 0; i < shapes.children.length; i++) {
        shapes.children[i].style.background = color;
    }
});

function paintSpot(x, y) {
    const spot = document.createElement("div");
    spot.className = `spot ${shape}`;
    spot.style.left = `${x-15}px`;
    spot.style.top = `${y-15}px`;
    spot.style.background = `${color}`;
    canvas.appendChild(spot);
}