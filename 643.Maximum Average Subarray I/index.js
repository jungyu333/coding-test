const findMaxAverage = function (nums, k) {
  let left = 0;
  let largestTotal = 0;
  let currentTotal = 0;

  // 처음 k 길이의 부분 배열의 합 구하기
  for (let i = 0; i < k; i++) {
    currentTotal += nums[i];
  }

  // 현재 가장 큰 총합이 처음 구한 총합이다.
  largestTotal = currentTotal;

  // k번째 요소부터 하나씩 늘려가면서 총합을 구한다.
  for (let right = k; right < nums.length; right++) {
    currentTotal -= nums[left++];
    currentTotal += nums[right];
    // 만약 현재 총합이 최대 총합보다 크면 갱신
    largestTotal = currentTotal > largestTotal ? currentTotal : largestTotal;
  }

  // 평균 리턴
  return largestTotal / k;
};
