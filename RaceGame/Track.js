const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
// prettier-ignore
var trackGrid = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,2,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,
  1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,
  1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,
  1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,
  1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,
  1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;

function isWallAtColRow(col, row) {
  if (col >= 0 && col < TRACK_COLS && row >= 0 && row < TRACK_ROWS) {
    var trackIndexUnderCoord = rowColToArrayIndex(col, row);
    return trackGrid[trackIndexUnderCoord] == TRACK_WALL;
  } else {
    return false;
  }
}

function carTrackHandling() {
  var carTrackCol = Math.floor(carX / TRACK_W); // Adjust for radius
  var carTrackRow = Math.floor(carY / TRACK_H);

  if (
    carTrackCol >= 0 &&
    carTrackCol < TRACK_COLS &&
    carTrackRow >= 0 &&
    carTrackRow < TRACK_ROWS
  ) {
    if (isWallAtColRow(carTrackCol, carTrackRow)) {
      carSpeed *= -0.5;
    } // end of track found
  } // end of valid col and row
} // end of carTrackHAndling function

function rowColToArrayIndex(col, row) {
  return TRACK_COLS * row + col;
}

function drawTracks() {
  for (let eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
    trackGrid.forEach((b, eachCol) => {
      const arrayIndex = rowColToArrayIndex(eachCol, eachRow);
      if (trackGrid[arrayIndex] == TRACK_ROAD) {
        canvasContext.drawImage(roadPic, TRACK_W * eachCol, TRACK_H * eachRow);
      } else if (trackGrid[arrayIndex] == TRACK_WALL) {
        canvasContext.drawImage(wallPic, TRACK_W * eachCol, TRACK_H * eachRow);
      }
    });
  }
}