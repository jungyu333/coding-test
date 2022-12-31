const numWaterBottles = function (numBottles, numExchange) {
  let result = 0;
  let currentExchange = 0;
  while (numBottles > 0) {
    // 현재 마실 수 있는 음료 갯수를 더한다
    result += numBottles;
    // 현재 가지고 있는 빈병의 수 갱신
    currentExchange = currentExchange + numBottles;
    // 빈병을 새 음료수로 교환한다.
    numBottles = Math.floor(currentExchange / numExchange);
    // 현재 가지고 있는 빈병의 수를 다시 갱신해준다
    currentExchange -= numBottles * numExchange;
  }

  return result;
};
