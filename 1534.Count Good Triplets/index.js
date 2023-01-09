const countGoodTriplets = function (arr, a, b, c) {
  let result = 0;
  // triplets 를 만들어서 조건을 검사한다.
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          result++;
        }
      }
    }
  }

  return result;
};
