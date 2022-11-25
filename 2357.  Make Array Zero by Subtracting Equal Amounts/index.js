const minimumOperations = function (nums) {
  let count = 0;
  const set = [...new Set(nums)];

  for (let i = 0; i < set.length; i++) {
    if (set[i] !== 0) {
      count++;
    }
  }

  return count;
};
