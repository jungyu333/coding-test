const average = function (salary) {
  salary.sort((a, b) => a - b);
  salary.shift();
  salary.pop();

  let sum = 0;

  salary.forEach((sal) => (sum += sal));

  return sum / salary.length;
};
