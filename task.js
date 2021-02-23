const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

canvas.width = 450;
canvas.height = 500;

function main() {

    clearCanvas();
    requestAnimationFrame(main); // sempre desenhar na tela

}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height) // The clearRect() method clears the specified pixels within a given rectangle.
}

function drawBackground() {
    const gradient = context.createLinearGradient(0, canvas.height / 2, canvas.width, canvas.height / 2);
    gradient.addStopColor(0, "#333");
    gradient.addStopColor(0.5, "#666");
    gradient.addStopColor(1, "#333");
}

main();