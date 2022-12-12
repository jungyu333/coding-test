const largestOddNumber = function (num) {
  let sub = "";
  let answer = "";

  for (let i = 0; i <= num.length; i++) {
    sub = num.substring(0, i);
    if (sub[sub.length - 1] % 2 !== 0 && answer < sub) {
      answer = sub;
    }
  }

  return answer;
};
