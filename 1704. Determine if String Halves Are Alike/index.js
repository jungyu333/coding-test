const halvesAreAlike = function (s) {
  const a = s.slice(0, s.length / 2);
  const b = s.slice(s.length / 2);

  const vowels = (string) => {
    const matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  };

  return vowels(a) === vowels(b) ? true : false;
};
