const invertTree = function (root) {
  if (root === null) {
    return root;
  } else {
    let temp = root.left;
    root.left = root.right;
    root.right = temp; // 왼쪽 자식과 오름쪽 자식 노드 교환
    invertTree(root.left); // 왼쪽 서브트리로 진행
    invertTree(root.right); // 오른쪽 서브트리로 진행
    return root;
  }
};
