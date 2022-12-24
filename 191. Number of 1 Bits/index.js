var hammingWeight = function (n) {
  let binary = n.toString(2);

  binary = binary.replace(/0/g, "");
  return binary.length;
};
