const isPowerOfFour = function (n) {
  let x = 0;

  while (4 ** x <= n) {
    if (4 ** x === n) {
      return true;
    } else {
      x++;
    }
  }
  return false;
};
