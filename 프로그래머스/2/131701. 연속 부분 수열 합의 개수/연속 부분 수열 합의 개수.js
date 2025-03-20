function solution(elements) {
    const n = elements.length;
    const elementsArr = [];
    const sums = new Set();

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            for (let k = 0; k < i; k++) {
                sum += elements[(j + k) % n]; // 원형 부분합 계산
            }
            sums.add(sum);
        }
    }

    return sums.size;

}
