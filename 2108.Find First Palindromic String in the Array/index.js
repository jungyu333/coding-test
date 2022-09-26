const firstPalindrome = function (words) {
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let temp = words[i].split("");
    let reverse = words[i].split("").reverse();

    if (temp.join("") === reverse.join("")) {
      result = words[i];
      return result;
    }
  }
  return result;
};
