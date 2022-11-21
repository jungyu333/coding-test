const sortSentence = function (s) {
  const sentence = s.split(" ");
  const result = [];

  sentence.sort((a, b) => a.substr(-1) - b.substr(-1));

  sentence.forEach((sen) => {
    result.push(sen.substr(0, sen.length - 1));
  });

  return result.join(" ");
};
