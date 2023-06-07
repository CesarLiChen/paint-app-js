const canvas = document.querySelector(".canvas");

let isDrawing = false;

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

function paintSpot(x, y) {
    const spot = document.createElement("div");
    spot.className = "spot circleOption";
    spot.style.left = `${x-15}px`;
    spot.style.top = `${y-15}px`;
    spot.style.background = "green";
    canvas.appendChild(spot);
}