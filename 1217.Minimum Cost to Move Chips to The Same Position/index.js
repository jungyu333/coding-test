const minCostToMoveChips = function (position) {
  let even = 0;
  let odd = 0;

  position.forEach((item) => {
    // 짝수면 even++ , 홀수면 odd++
    item % 2 === 0 ? even++ : odd++;
  });

  return Math.min(even, odd);
};
