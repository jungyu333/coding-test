const decompressRLElist = function (nums) {
  let result = [];
  const helper = (freq, val) => {
    // freq 횟수 만큼 val을 arr에 넣어서 리턴해주는 helper 함수
    const arr = [];
    for (let i = 0; i < freq; i++) {
      arr.push(val);
    }
    return arr;
  };

  for (let i = 0; i < nums.length / 2; i++) {
    const [freq, val] = [nums[2 * i], nums[2 * i + 1]];

    result.push(...helper(freq, val)); // 각 pair 마다 helper로 생성되는 배열의 요소들을 result에 넣어준다
  }

  return result;
};
