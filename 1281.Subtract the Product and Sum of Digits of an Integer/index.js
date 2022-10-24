const subtractProductAndSum = function (n) {
  n = n + "";
  let mul = 1;
  let sum = 0;
  for (char of n) {
    mul *= char;
    sum += parseInt(char);
  }

  return mul - sum;
};
