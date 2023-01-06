const minOperations = function (logs) {
  const stack = [];

  for (let i = 0; i < logs.length; i++) {
    let top = stack[stack.length - 1];

    if (logs[i] === "../") {
      // '../' 이면 stack pop
      stack.pop();
    } else if (logs[i] === "./") {
      // './' 이면 폴더 이동 x
      continue;
    } else {
      // 폴더이동을 한다.
      stack.push(logs[i]);
    }
  }

  return stack.length; // stack의 길이 만큼 '../' 을 수행해야한다.
};
