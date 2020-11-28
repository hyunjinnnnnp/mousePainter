const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function init() {}

window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
}
resizeCanvas();
init();
