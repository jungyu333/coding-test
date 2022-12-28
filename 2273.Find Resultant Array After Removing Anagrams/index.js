const removeAnagrams = function (words) {
  // 가장 앞의 단어 정렬해서 stack에 넣기
  const stack = [words[0].split("").join("")];

  let top = "";
  let current = "";
  for (let i = 1; i < words.length; i++) {
    // 스택의 가장 위에있는 요소를 꺼낸다
    top = stack[stack.length - 1];
    // 현재 단어를 오름차순으로 정렬한다
    current = words[i].split("").sort().join("");
    // 스택의 가장 위부분과 current 를 비교한다
    if (top.split("").sort().join("") === current) {
      continue;
    } else {
      // 만약 다르다면 current 단어를 stack에 넣어준다
      stack.push(words[i]);
    }
  }

  return stack;
};
