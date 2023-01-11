const findKDistantIndices = function (nums, key, k) {
  const jarr = [];
  const result = [];

  // nums[j] === key 를 만족하는 index를 저장한다.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      jarr.push(i);
    }
  }

  // nums 의 index 중 j와의 차의 절댓값이 k 이하일 경우 result에 넣어준다.
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < jarr.length; j++) {
      if (Math.abs(i - jarr[j]) <= k) {
        result.push(i);
        break;
      }
    }
  }

  return result;
};
