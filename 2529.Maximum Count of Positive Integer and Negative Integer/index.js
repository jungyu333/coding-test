const maximumCount = function (nums) {
  let mid = 0;
  let pos = 0;
  let neg = 0;

  for (let i = 0; i < nums.length; i++) {
    // 음수가 끝나는 index를 찾는다
    if (nums[i] >= 0) {
      mid = i;
      break;
    }
  }

  // 음수들만 있는 배열
  const negative = nums.splice(0, mid);

  // 음수의 갯수
  neg = negative.length;

  // 0이 아닌 양수 갯수
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      pos++;
    }
  }

  return Math.max(pos, neg);
};
