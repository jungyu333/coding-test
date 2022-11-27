const countGoodSubstrings = function (s) {
  let count = 0;
  const length = s.length - 3;
  const sub = [];
  for (let i = 0; i <= length; i++) {
    sub.push(s.substr(i, 3));
  }

  sub.forEach((sub) => {
    const temp = [...new Set(sub)];
    if (temp.length === sub.length) {
      count++;
    }
  });

  return count;
};
