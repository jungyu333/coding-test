const nextGreatestLetter = function (letters, target) {
  let result = letters[0];

  for (let i = 0; i < letters.length; i++) {
    // target 보다 사전 순서가 크다면 result 에 저장 후 break
    if (letters[i] > target) {
      result = letters[i];

      break;
    }
  }

  return result;
};
