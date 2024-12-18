const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

function carClass() {
  this.x = 75;
  this.y = 75;
  this.ang = 0;
  this.speed = 0;

  this.carReset = function () {
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
  };
}

function carDraw() {
  drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
}

function carMove() {
  carSpeed *= GROUNDSPEED_DECAY_MULT;
  if (keyHeld_Gas) {
    carSpeed += DRIVE_POWER;
  }
  if (keyHeld_Reverse) {
    carSpeed -= REVERSE_POWER;
  }
  if (Math.abs(carSpeed) > MIN_SPEED_TO_TURN) {
    if (keyHeld_TurnLeft) {
      carAng -= TURN_RATE;
    }
    if (keyHeld_TurnRight) {
      carAng += TURN_RATE;
    }
  }

  carX += Math.cos(carAng) * carSpeed;
  carY += Math.sin(carAng) * carSpeed;
}
