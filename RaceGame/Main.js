/**
 * @type {HTMLCanvasElement}
 */
var canvas;
/**
 * @type {CanvasRenderingContext2D}
 */
var canvasContext;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  clearScreen();
  colorText("Loading Images", canvas.width / 2, canvas.height / 2, "white");

  loadImages();
};
function imageLoadingDoneSoStartGame() {
  var framesPerSecond = 30;
  setInterval(updateAll, 1000 / framesPerSecond);

  setupInput();

  carReset();
}

function moveAll() {
  carMove();
  carTrackHandling();
}

function clearScreen() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
}

function drawAll() {
  // clearScreen();
  drawTracks();
  carDraw();
}

function updateAll() {
  moveAll();
  drawAll();
}
