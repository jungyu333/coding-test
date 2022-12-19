const maxProduct = function (nums) {
  nums.sort((a, b) => b - a); // 내림차순 정렬
  return (nums[0] - 1) * (nums[1] - 1); // 배열의 앞에서 두개 숫자 -1 값을 곱해서 리턴
};
