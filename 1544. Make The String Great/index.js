const makeGood = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (
      stack.length &&
      Math.abs(s[i].charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32
    ) {
      // stack 이 비어있지 않고 현재 알파벳과 stack의 top의 알파벳이 대소문자만 다른 같은 철자일 때 stack 최상단 값을 뺀다.
      stack.pop();
    } else {
      // stack이 비어있거나 전혀 다른 두 알파벳이라면 스택에 현재 알파벳을 넣어준다.
      stack.push(s[i]);
    }
  }

  return stack.join("");
};
