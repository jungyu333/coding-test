const pivotIndex = function (nums) {
  let right_sum = 0;
  let left_sum = 0;

  nums.forEach((num) => (right_sum += num));

  for (let i = 0; i < nums.length; i++) {
    right_sum -= nums[i];

    if (right_sum === left_sum) return i;

    left_sum += nums[i];
  }

  return -1;
};
