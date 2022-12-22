const toGoatLatin = function (sentence) {
  sentence = sentence.split(" ");

  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i][0] === "a" ||
      sentence[i][0] === "e" ||
      sentence[i][0] === "i" ||
      sentence[i][0] === "o" ||
      sentence[i][0] === "u" ||
      sentence[i][0] === "A" ||
      sentence[i][0] === "E" ||
      sentence[i][0] === "I" ||
      sentence[i][0] === "O" ||
      sentence[i][0] === "U"
    ) {
      // 모음으로 시작하면 단어 뒤에 'ma' 더하기
      sentence[i] = sentence[i] + "ma";
    } else {
      // 모음으로 시작하지 않으면 제일 앞 철자를 뒤에 붙이고 'ma' 붙이기
      sentence[i] = sentence[i].slice(1) + sentence[i][0] + "ma";
    }

    sentence[i] = sentence[i] + "a".repeat(i + 1); // 단어의 앞에서부터 순번에 따라 a 붙여준다.
  }

  return sentence.join(" ");
};
