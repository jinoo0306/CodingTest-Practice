function solution(n) {
    let ways = 0
    let startNum = 1
    while(startNum <= n) {
        let sum = 0
        let i = startNum;
        while(true) {
            if(sum > n) break
            
            if (sum === n) {
                ways++
                break
            }
            sum = sum + i
            i++
        }
        startNum++;
    }
    return ways
}