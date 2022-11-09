const countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  if (ruleKey === "type") {
    items.forEach((item) => {
      if (item[0] === ruleValue) count++;
    });
  } else if (ruleKey === "color") {
    items.forEach((item) => {
      if (item[1] === ruleValue) count++;
    });
  } else if (ruleKey === "name") {
    items.forEach((item) => {
      if (item[2] === ruleValue) count++;
    });
  }

  return count;
};
