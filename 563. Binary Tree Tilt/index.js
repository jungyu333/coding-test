const findTilt = function (root) {
  let tilt = 0;
  const helper = (node) => {
    if (node === null) return 0; //현재 노드가 null 이면 0

    const left = helper(node.left); //왼쪽 자식 노드
    const right = helper(node.right); //오른쪽 자식 노드

    const abs = Math.abs(left - right); // 두 자식 노드값의 절댓값 차
    tilt += abs;
    return left + right + node.val;
  };

  helper(root);
  return tilt;
};
