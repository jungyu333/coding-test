const destCity = function (paths) {
  let map = {};
  let result = "";

  paths.forEach((city) => {
    map[city[0]] ? (map[city[0]] = map[city[0]] + 1) : (map[city[0]] = 1);
  });

  paths.forEach((city) => {
    if (!map[city[1]]) {
      result = city[1];
    }
  });

  return result;
};
