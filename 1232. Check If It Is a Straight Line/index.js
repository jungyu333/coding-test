const checkStraightLine = function (coordinates) {
  let inclination =
    (coordinates[0][1] - coordinates[1][1]) /
    (coordinates[0][0] - coordinates[1][0]);

  for (let i = 0; i < coordinates.length - 1; i++) {
    for (let j = i + 1; j < coordinates.length; j++) {
      if (
        (coordinates[i][1] - coordinates[j][1]) /
          (coordinates[i][0] - coordinates[j][0]) !==
        inclination
      ) {
        if (
          Math.abs(inclination) === Infinity &&
          Math.abs(
            (coordinates[i][1] - coordinates[j][1]) /
              (coordinates[i][0] - coordinates[j][0])
          ) === Infinity
        ) {
          continue;
        } else {
          return false;
        }
      }
    }
  }

  return true;
};
