const lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a); //내림차순 정렬하기

  while (true) {
    if (stones.length <= 1) {
      // 배열의 길이가 1 미만이면
      return stones.length === 1 ? stones[0] : 0; //배열에 stone이 남아있으면 남은 stone 리턴
    } else {
      let y = stones.shift(); // y stone
      let x = stones.shift(); // x stone

      if (y !== x) {
        // y stone 이 x stone 보다 무거우면
        stones.unshift(y - x); // 그 차이를 배열 앞에 삽입
        stones.sort((a, b) => b - a); // 다시 내림차순으로 정렬
      }
    }
  }
};
