const longestPalindrome = function (s) {
  let sum = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      sum += 2;
      map[s[i]] = 0;
    }
  }

  return sum < s.length ? sum + 1 : sum;
};
