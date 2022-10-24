const minimumDifference = function (nums, k) {
  if (k === 1) return 0;

  nums.sort((a, b) => b - a);
  let minimum = Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    let temp = [];
    for (let j = i; j < k + i; j++) {
      temp.push(nums[j]);
    }

    minimum = Math.min(temp[0] - temp[k - 1], minimum);
  }
  return minimum;
};
