const mostWordsFound = function (sentences) {
  let maximum = 1;

  sentences.forEach((sen) => {
    let temp = sen.split(" ");
    maximum = Math.max(temp.length, maximum);
  });

  return maximum;
};
