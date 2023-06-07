const canvas = document.querySelector(".canvas");

let isDrawing = false;

canvas.addEventListener("mousedown", (event) => {
    console.log("Drawing..");
    isDrawing = true;
});

canvas.addEventListener("mouseup", (event) => {
    console.log("mouse upped");
    isDrawing = false;
});

canvas.addEventListener("mouseleave", (event) => {
    console.log("Stopped drawing")
    isDrawing = false;
});

paintSpot(200, 200);

function paintSpot(x, y) {
    const spot = document.createElement("div");
    spot.className = "spot circleOption";
    spot.style.left = `${x}px`;
    spot.style.top = `${y}px`;
    spot.style.background = "green";
    canvas.appendChild(spot);
}