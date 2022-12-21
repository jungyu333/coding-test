const maximumValue = function (strs) {
  let maximum = 0;
  for (let i = 0; i < strs.length; i++) {
    if (isNaN(Number(strs[i]))) {
      // 숫자가 아닌 단어이면 true
      maximum = Math.max(maximum, strs[i].length); // 단어이면 단어의 길이와 최댓값을 비교
    } else {
      maximum = Math.max(maximum, parseInt(strs[i])); // 숫자이면 숫자와 최댓값을 비교
    }
  }

  return maximum;
};
