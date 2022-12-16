const duplicateZeros = function (arr) {
  let count = 0;
  let length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
      count++;
    }
  }

  arr.splice(length, count);
};
