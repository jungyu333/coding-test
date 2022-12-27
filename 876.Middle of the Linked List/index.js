const middleNode = function (head) {
  // 리스트의 길이 구하는 함수
  const getLength = (head) => {
    let current = head;
    let length = 0;
    while (current !== null) {
      if (current) {
        length++;
        current = current.next;
      }
    }
    return length;
  };

  // 리스트의 중간 인덱스 구하기
  const middle = Math.floor(getLength(head) / 2);

  let current = head;
  let count = 0;
  // 리스트를 순회하면서 중간인덱스부분을 head로 변경해준다.
  while (current !== null) {
    if (count === middle) {
      head = current;
      break;
    }
    count++;
    current = current.next;
  }

  return head;
};
