const largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    let nums1 = nums[i];
    let nums2 = nums[i + 1];
    let nums3 = nums[i + 2];

    if (nums1 < nums3 + nums2) return nums1 + nums2 + nums3;
  }

  return 0;
};
