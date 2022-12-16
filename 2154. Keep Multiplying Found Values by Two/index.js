const findFinalValue = function (nums, original) {
  while (1) {
    if (nums.includes(original)) {
      // nums에 original이 존재하는지 체크
      original *= 2; // 존재한다면 2배
    } else {
      return original; // 아니라면 original return
    }
  }

  return original;
};
