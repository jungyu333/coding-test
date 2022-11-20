const mergeSimilarItems = function (items1, items2) {
  const item = items1.concat(items2);
  item.sort((a, b) => a[0] - b[0]);
  const result = [];

  let dic = {};
  item.forEach((arr) => {
    dic[arr[0]] ? (dic[arr[0]] = dic[arr[0]] + arr[1]) : (dic[arr[0]] = arr[1]);
  });

  for (key in dic) {
    result.push([key, dic[key]]);
  }

  return result;
};
