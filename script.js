let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = document.querySelector(".wrap__canvas").offsetWidth;
canvas.height = 1.5 * document.querySelector(".wrap__canvas").offsetHeight;
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, 4096, 4096);
let isPress = false;
let old = null;
canvas.addEventListener("mousedown", function (e) {
  isPress = true;
  old = { x: e.offsetX, y: e.offsetY };
});
canvas.addEventListener("mousemove", function (e) {
  if (isPress) {
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.beginPath();
    ctx.lineCap = "round";
    // ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.lineWidth = 90;
    ctx.moveTo(old.x, old.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.globalCompositeOperation = "destination-out";
    old = { x: x, y: y };
  }
});
canvas.addEventListener("mouseup", function () {
  isPress = false;
});
