const prefixesDivBy5 = function (nums) {
  let number = 0;
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    number = BigInt(number) * BigInt(2) + BigInt(nums[i]); // 이전 숫자 값은 2를 곱해주고 현재 숫자를 더해준다
    number % BigInt(5) == 0 ? answer.push(true) : answer.push(false); // 5로 나누어지면 true , 아니라면 false
  }
  return answer;
};
