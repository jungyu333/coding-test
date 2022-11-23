const averageValue = function (nums) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
      count++;
      sum += nums[i];
    }
  }

  return count >= 1 ? Math.floor(sum / count) : 0;
};
