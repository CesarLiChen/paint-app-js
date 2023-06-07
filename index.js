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
})