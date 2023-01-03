const sortPeople = function (names, heights) {
  const result = [];
  for (let i = 0; i < heights.length; i++) {
    // 가장 키가 큰 사람의 index 구하기
    let tallestIndex = heights.indexOf(Math.max(...heights));

    // 가장 키 큰 사람의 키 값 0 으로 만들기
    heights[tallestIndex] = 0;

    // 가장 키큰 사람
    let tall = names[tallestIndex];
    // 가장 큰 순서대로 result 배열에 넣어준다.
    result.push(tall);
  }

  return result;
};
