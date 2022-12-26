const removeDuplicates = function (s) {
  const stack = [s[0]]; // 문자열의 가장 앞 철자를 스택에 넣는다

  for (let i = 1; i < s.length; i++) {
    let top = stack.pop(); // 스택의 가장 윗부분을 하나 뺀다
    if (top !== s[i]) {
      // 스택의 가장 윗부분과 현재 철자가 다르면 먼저 뺐던 가장 위 철자와 현재 철자를 순서대로 스택에 쌓는다
      stack.push(top);
      stack.push(s[i]);
    }
  }

  return stack.join("");
};
