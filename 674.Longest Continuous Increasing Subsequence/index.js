const findLengthOfLCIS = function (nums) {
  let maxLength = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    // 배열을 순회하면서
    current++; // 현재 길이 1 증가
    if (nums[i + 1] <= nums[i]) {
      // 만약 감소하는 부분이 나타나면
      if (current > maxLength) {
        // 현재 길이와 최대길이 중 큰 값을 최대길이로 갱신
        maxLength = current;
      }
      current = 0; // 현재 길이 0 으로 초기화
    }
  }

  return Math.max(current, maxLength); // 최대 길이와 현재 길이중 최대값을 리턴한다.
};
