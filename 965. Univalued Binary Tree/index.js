const isUnivalTree = function (root) {
  const temp = [];

  const helper = (node) => {
    if (node) {
      helper(node.left);
      temp.push(node.val);
      helper(node.right);
    }
  };

  helper(root);
  const set = [...new Set(temp)];
  return set.length === 1 ? true : false;
};
