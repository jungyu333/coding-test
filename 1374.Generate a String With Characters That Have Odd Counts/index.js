const generateTheString = function (n) {
  let result = "a";
  if (n % 2 === 0) {
    result = result.repeat(n - 1);
    result += "b";
  } else {
    result = result.repeat(n);
  }

  return result;
};
