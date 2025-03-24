function solution(name) {
  let nameArr = name.split("");
  let totalCount = 0;

  // 1. 위아래 조작: 각 문자에 대해 계산
  for (let i = 0; i < nameArr.length; i++) {
    const charCode = nameArr[i].charCodeAt(0);
    const diff = Math.min(charCode - 65, 91 - charCode); // A = 65, Z = 90
    totalCount += diff;
  }

  // 2. 좌우 조작: 커서를 어떻게 이동하면 최소인지 계산
  let minMove = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let next = i + 1;
    while (next < name.length && name[next] === "A") {
      next++;
    }

    // 좌측으로 갔다가 우측으로 가는 경우 고려
    const move = i + name.length - next + Math.min(i, name.length - next);
    minMove = Math.min(minMove, move);
  }

  totalCount += minMove;
  return totalCount;
}
