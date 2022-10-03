const isPalindrome = function (head) {
  let array = [];

  const pushVal = (node) => {
    if (node) {
      array.push(node.val);
      pushVal(node.next);
    }
  };

  pushVal(head);

  while (head) {
    if (head.val !== array.pop()) return false;
    head = head.next;
  }

  return true;
};
