const validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  const maximum = Math.max(...arr);

  const index = arr.indexOf(maximum);

  const first = arr.slice(0, index + 1);
  const second = arr.slice(index);

  const set1 = new Set([...first]);
  const set2 = new Set([...second]);

  if (first.length !== [...set1].length || second.length !== [...set2].length)
    return false;

  if (first.length === 1 || second.length === 1) return false;

  const tempFirst = [...first];
  const tempSecond = [...second];

  tempFirst.sort((a, b) => a - b);

  tempSecond.sort((a, b) => b - a);

  return JSON.stringify(first) === JSON.stringify(tempFirst) &&
    JSON.stringify(second) === JSON.stringify(tempSecond)
    ? true
    : false;
};
