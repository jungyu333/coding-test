const construct2DArray = function (original, m, n) {
  let result = [];

  if (m * n !== original.length) return result;

  for (let i = 0; i < original.length; i += n) {
    result.push(original.slice(i, i + n));
  }

  return result;
};
