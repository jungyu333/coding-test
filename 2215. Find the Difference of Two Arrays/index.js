const findDifference = function (nums1, nums2) {
  const set1 = [...new Set(nums1)];
  const set2 = [...new Set(nums2)];

  const result = [];

  result.push(set1.filter((num) => !set2.includes(num)));
  result.push(set2.filter((num) => !set1.includes(num)));

  return result;
};
