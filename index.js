const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const mouse = {
  x: undefined,
  y: undefined,
};

function fadeOut() {
  let opacity = 0.1 + Math.random() * 0.1;
  ctx.fillStyle = `rgb(39, 37, 37,${opacity})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  setTimeout(fadeOut, 100);
}

function draw() {
  const random = Math.random() * 20;

  const r = 20;

  ctx.beginPath();
  ctx.filter = "blur(10px)";
  ctx.fillStyle = "rgba(255,255,255,1)";
  for (let i = 0; i < 10; i++) {
    ctx.arc(mouse.x + random, mouse.y + random, r + random, 0, 360);
  }
  ctx.fill();
}

function handleMouse(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;

  draw();
}

function init() {
  canvas.addEventListener("mousemove", handleMouse);
  window.addEventListener("resize", resizeCanvas);
  fadeOut();
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
}
resizeCanvas();
init();
