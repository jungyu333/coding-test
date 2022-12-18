const sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    // 홀수 개씩 subarray
    for (let j = 0; j <= arr.length - i; j++) {
      //배열 앞에서부터 홀수개씩 배열을 자른다
      let temp = arr.slice(j, i + j);
      sum += temp.reduce((sum, item) => sum + item); // 배열의 합을 sum에 더해준다
    }
  }

  return sum;
};
