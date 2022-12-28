const createTargetArray = function (nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    // 지정된 인덱스에 지정된 숫자를 넣어준다.
    target.splice(index[i], 0, nums[i]);
  }

  return target;
};
