const arrayPairSum = function (nums) {
  const n = nums.length / 2;
  let result = 0;

  nums.sort((a, b) => a - b);

  if (n < 2) return nums[0];

  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }

  return result;
};
