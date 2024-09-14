const fs = require('fs');

// 입력을 읽어옴
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

// 첫 번째 줄은 테스트 케이스 개수
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const str = input[i];
  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  
  // 첫 번째와 마지막 문자를 출력
  console.log(`${firstChar}${lastChar}`);
}