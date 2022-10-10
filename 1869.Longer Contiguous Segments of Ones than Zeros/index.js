const checkZeroOnes = function (s) {
  let longestOne = 0;
  let segmentOne = 0;
  let longestZero = 0;
  let segmentZero = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      segmentOne++;

      if (s[i + 1] !== s[i] || !s[i + 1]) {
        longestOne = Math.max(longestOne, segmentOne);
        segmentOne = 0;
      }
    } else if (s[i] === "0") {
      segmentZero++;

      if (s[i + 1] !== s[i] || !s[i + 1]) {
        longestZero = Math.max(longestZero, segmentZero);
        segmentZero = 0;
      }
    }
  }

  return longestOne > longestZero ? true : false;
};
