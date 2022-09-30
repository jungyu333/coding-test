const leafSimilar = function (root1, root2) {
  let leaf1 = [];
  let leaf2 = [];

  const helper = (root, array) => {
    if (root) {
      if (root.right === null && root.left === null) {
        return array.push(root.val);
      }
      helper(root.left, array);
      helper(root.right, array);
    }
  };

  helper(root1, leaf1);
  helper(root2, leaf2);

  return leaf1.toString() === leaf2.toString() ? true : false;
};
