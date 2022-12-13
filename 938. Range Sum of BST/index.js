const rangeSumBST = function (root, low, high) {
  let sum = 0;

  const helper = (node) => {
    if (node) {
      helper(node.left); // 왼쪽자식
      if (node.val <= high && node.val >= low) {
        sum += node.val;
      }
      helper(node.right); // 오른쪽 자식
    }
  };

  helper(root);
  return sum;
};
