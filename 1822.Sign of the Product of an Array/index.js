const arraySign = function (nums) {
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    product *= nums[i];
  }

  if (product === 0) {
    return 0;
  } else if (product > 0) {
    return 1;
  } else {
    return -1;
  }
};
