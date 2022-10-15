const distributeCandies = function (candyType) {
  const haveToEat = candyType.length / 2;

  const candyTypeCount = [...new Set(candyType)].length;

  return haveToEat <= candyTypeCount ? haveToEat : candyTypeCount;
};
