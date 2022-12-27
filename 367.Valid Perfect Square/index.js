const isPerfectSquare = function (num) {
  for (let i = 1; i <= num; i++) {
    // 제곱수이면 true
    if (i * i === num) return true;
    if (i * i > num) return false;
  }
};
