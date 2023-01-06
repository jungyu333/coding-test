const capitalizeTitle = function (title) {
  title = title.split(" ");

  for (let i = 0; i < title.length; i++) {
    if (title[i].length <= 2) {
      // 단어의 길이가 2 이하이면 소문자로 바꾼다
      title[i] = title[i].toLowerCase();
    } else {
      // 단어의 길이가 3이상이면 앞 철자만 대문자로 바꿔준다.
      title[i] = title[i].toLowerCase();
      let temp = title[i].split("");
      temp.shift();
      temp.unshift(title[i][0].toUpperCase());
      title[i] = temp.join("");
    }
  }

  return title.join(" ");
};
