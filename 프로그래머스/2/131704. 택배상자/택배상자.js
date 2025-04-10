function solution(order) {
  let box = 1;
  let count = 0;
  let tempBox = [];
  let i = 0;

  while (box <= order.length) {
    if (order[i] === box) {
      count++;
      i++;
      box++;
    } else if (tempBox.length > 0 && tempBox[tempBox.length - 1] === order[i]) {
      tempBox.pop();
      count++;
      i++;
    } else {
      tempBox.push(box);
      box++;
    }
  }

  while (tempBox.length > 0) {
    if (tempBox[tempBox.length - 1] === order[i]) {
      tempBox.pop();
      count++;
      i++;
    } else {
      break;
    }
  }

  return count;
}
