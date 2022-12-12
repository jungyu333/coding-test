const fizzBuzz = function (n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // i 가 3과 5로 모두 나눠지는 경우
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      // i 가 3으로만 나눠지는 경우
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      // i 가 5로만 나눠지는 경우
      answer.push("Buzz");
    } else {
      // 그 외의 경우
      answer.push(`${i}`);
    }
  }

  return answer;
};
