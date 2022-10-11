const relativeSortArray = function (arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr2.length; i++) {
    result = result.concat(arr1.filter((num) => num === arr2[i]));

    arr1 = arr1.filter((num) => num !== arr2[i]);
  }

  return result.concat(arr1.sort((a, b) => a - b));
};
