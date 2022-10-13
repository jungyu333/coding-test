const lemonadeChange = function (bills) {
  let change = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      change[bills[i]]++;
    } else if (bills[i] === 10) {
      if (change["5"] === 0) return false;
      change["5"]--;
      change["10"]++;
    } else if (bills[i] === 20) {
      if (change["10"] >= 1 && change["5"] >= 1) {
        change["10"] -= 1;
        change["5"] -= 1;
      } else if (change["5"] >= 3) {
        change["5"] -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
