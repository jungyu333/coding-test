const makeFancyString = function (s) {
  let count = 1;
  const stack = [s[0]];
  let top = "";

  for (let i = 1; i < s.length; i++) {
    // 스택의 가장 윗 요소를 꺼낸다.
    top = stack[stack.length - 1];
    if (top === s[i] && count < 2) {
      // 현재 단어와 top이 같고 count < 2 이면 현재 단어를 stack에 쌓는다
      stack.push(s[i]);
      count++;
    } else if (top !== s[i]) {
      // 현재 단어와 top 이 다르면 stack에 현재 단어를 쌓고 count를 1로 초기화한다.
      stack.push(s[i]);
      count = 1;
    } else if (top === s[i] && count === 2) {
      // top과 현재단어가 같고 count === 2이면 중복된 단어가 3이상이 되는 경우이므로 스택에 쌓지 않는다.
      continue;
    }
  }

  return stack.join("");
};
