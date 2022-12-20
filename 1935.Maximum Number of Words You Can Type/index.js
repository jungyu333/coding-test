const canBeTypedWords = function (text, brokenLetters) {
  text = text.split(" ");
  brokenLetters = brokenLetters.split(""); // 고장난 키보드 철자
  let count = text.length;

  text.forEach((txt) => {
    for (let i = 0; i < brokenLetters.length; i++) {
      if (txt.includes(brokenLetters[i])) {
        // 단어에 고장난 키보드 철자가 포함되어있으면 count - 1
        count--;
        break;
      }
    }
  });

  return count;
};
