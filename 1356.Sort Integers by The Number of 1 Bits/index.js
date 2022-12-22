const sortByBits = function (arr) {
  arr.sort(
    (a, b) =>
      a.toString(2).replace(/0/g, "").length -
        b.toString(2).replace(/0/g, "").length || a - b // 2진수로 바꾸어서 '0'을 없앤 후 남은 1의 갯수로 오름차순 정렬한다. 만약 1의 갯수가 같다면 10진수 상태로 오름차순 정렬한다.
  );

  return arr;
};
