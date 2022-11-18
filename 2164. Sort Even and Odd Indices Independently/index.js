const sortEvenOdd = function (nums) {
  const odd = [];
  const even = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(even.shift());
    } else {
      result.push(odd.shift());
    }
  }

  return result;
};
