const titleToNumber = function (columnTitle) {
  let length = columnTitle.length;
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    // 각 단어 자리수에 맞게 계산을 하여 더해준다.
    result += (columnTitle[i].charCodeAt() - 64) * 26 ** (length - 1);
    length--;
  }
  return result;
};
