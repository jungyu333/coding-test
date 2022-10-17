const removeDigit = function (number, digit) {
  let max = 0;

  for (let i = 0; i < number.length; i++) {
    if (digit === number[i]) {
      const first = number.slice(0, i);
      const second = number.slice(i + 1, number.length);
      const sum = BigInt(first + second);
      if (max <= sum) {
        max = sum;
      }
    }
  }

  return max + "";
};
