const isThree = function(n) {
  let count = 0;
  if(n <= 3) return false;
  
  for(let i = 1; i <= n; i++) {
      if(Number.isInteger(n / i)) count ++;
      if(count > 3) return false
  }
  
  return count === 3 ? true : false
};