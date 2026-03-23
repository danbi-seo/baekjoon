function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    let n = numbers.length;
    
    let case1 = numbers[n - 1] * numbers[n - 2];
    let case2 = numbers[0] * numbers[1];
    
    return Math.max(case1, case2);
}