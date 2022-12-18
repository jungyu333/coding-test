const countPairs = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 배열의 앞에서부터 두개씩 비교
      if (nums[i] === nums[j]) {
        // 두 숫자 값이 동일하고
        if ((i * j) % k === 0) {
          // i*j 가 k 로 나누어지면 count + 1
          count++;
        }
      }
    }
  }

  return count;
};
