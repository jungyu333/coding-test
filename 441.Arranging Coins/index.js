const arrangeCoins = function (n) {
  let row = 0;
  let coin = n;

  if (n === 1) return 1;

  for (let i = 1; i <= n; i++) {
    if (i <= coin) {
      coin -= i;
      row++;
    } else {
      return row;
    }
  }
};
