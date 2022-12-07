const ParkingSystem = function (big, medium, small) {
  this.map = {};
  this.map[1] = big;
  this.map[2] = medium;
  this.map[3] = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.map[carType + ""]-- > 0) {
    return true;
  } else {
    return false;
  }
};
