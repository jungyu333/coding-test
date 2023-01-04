const findRotation = function (mat, target) {
  let result = true;
  // nxn 행렬을 시계 방향으로 90도 회전하는 함수
  const rotate = (matrix) => {
    const rotateMatrix = [];
    // 요소가 전부 0인 nxn 빈 행렬 생성
    for (let i = 0; i < matrix.length; i++) {
      const row = [];
      for (let j = 0; j < matrix.length; j++) {
        row.push(0);
      }
      rotateMatrix.push(row);
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        rotateMatrix[j][matrix.length - 1 - i] = matrix[i][j];
      }
    }

    return rotateMatrix;
  };

  let rotatedMatrix = rotate(mat);

  for (let k = 0; k < 4; k++) {
    result = true;
    // target 행렬과 회전한 행렬을 비교한다
    for (let i = 0; i < target.length; i++) {
      for (let j = 0; j < target.length; j++) {
        if (rotatedMatrix[i][j] !== target[i][j]) {
          result = false;
        }
      }
    }

    // 만약 비교를 해서 target 행렬과 동일하다면 true를 리턴한다.
    if (result) {
      return result;
    } else {
      rotatedMatrix = rotate(rotatedMatrix);

      continue;
    }
  }

  return result;
};
