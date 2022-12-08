const wordPattern = function (pattern, s) {
  s = s.split(" ");
  pattern = pattern.split("");

  if (s.length !== pattern.length) return false;

  let r1 = "";
  let r2 = "";

  for (let i = 0; i < s.length; i++) {
    // 각 단어들의 최초 인덱스를 문자열로 만들어준다
    r1 += s.indexOf(s[i]);
    r2 += pattern.indexOf(pattern[i]);
  }

  return r1 === r2;
};
