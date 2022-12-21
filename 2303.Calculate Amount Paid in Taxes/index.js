const calculateTax = function (brackets, income) {
  let prev = 0;
  let current = 0;
  let tax = 0;
  for (let i = 0; i < brackets.length; i++) {
    current = brackets[i][0] - prev; // upperi - upper0

    if (income >= current) {
      // income 이 current 값보다 크다면 income에서 current를 빼주고 current * tax 비율 더해준다
      income -= current;
      tax += current * brackets[i][1];
      prev = brackets[i][0];
    } else {
      // 아니라면 income을 0으로 만들고 더해준다
      tax += income * brackets[i][1];
      prev = brackets[i][0];
      income = 0;
    }
  }

  return (tax / 100).toFixed(5);
};
