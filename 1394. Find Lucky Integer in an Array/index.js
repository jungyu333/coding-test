const findLucky = function (arr) {
  let result = [-1];
  let hash = {};

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] ? (hash[arr[i]] = hash[arr[i]] + 1) : (hash[arr[i]] = 1);
  }

  for (let key in hash) {
    if (hash[key] === parseInt(key)) result.push(key);
  }

  return Math.max(...result);
};
