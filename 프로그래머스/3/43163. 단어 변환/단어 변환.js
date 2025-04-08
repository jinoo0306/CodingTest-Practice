function solution(begin, target, words) {
  let visit = [];
  let box = [];
  box.push([begin, 0]);

  while (box.length > 0) {
    let now = box.shift();
    let txt = now[0];
    let cnt = now[1];

    if (txt === target) {
      return cnt;
    }

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let diff = 0;
      for (let j = 0; j < word.length; j++) {
        if (txt[j] !== word[j]) {
          diff++;
        }
      }

      if (diff === 1 && !visit.includes(word)) {
        visit.push(word);
        box.push([word, cnt + 1]);
      }
    }
  }

  return 0;
}
