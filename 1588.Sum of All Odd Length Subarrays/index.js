var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j <= arr.length - i; j++) {
      let temp = arr.slice(j, i + j);
      sum += temp.reduce((sum, item) => sum + item);
    }
  }

  return sum;
};
