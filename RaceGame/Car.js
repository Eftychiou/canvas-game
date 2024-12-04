var carX = 75;
var carY = 75;
var carAng = 0;
var carSpeed = 0;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03;

function carDraw() {
  drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
}

function carReset() {
  for (let eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
    for (let eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
      const arrayIndex = rowColToArrayIndex(eachCol, eachRow);
      if (trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
        carAng = (-90 * Math.PI) / 180;
        trackGrid[arrayIndex] = TRACK_ROAD;
        carX = eachCol * TRACK_W + TRACK_W / 2;
        carY = eachRow * TRACK_H + TRACK_H / 2;
      }
    }
  }
}

function carMove() {
  carSpeed *= GROUNDSPEED_DECAY_MULT;
  if (keyHeld_Gas) {
    carSpeed += DRIVE_POWER;
  }
  if (keyHeld_Reverse) {
    carSpeed -= REVERSE_POWER;
  }
  if (keyHeld_TurnLeft) {
    carAng -= TURN_RATE;
  }
  if (keyHeld_TurnRight) {
    carAng += TURN_RATE;
  }
  carX += Math.cos(carAng) * carSpeed;
  carY += Math.sin(carAng) * carSpeed;
}
