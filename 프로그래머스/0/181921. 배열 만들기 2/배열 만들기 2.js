function solution(l, r) {
    const answer = [];
    const numbers = ['5'];
    
    while (numbers.length) {
        const current = numbers.shift();
        const num = Number(current);
        
        if (num > r) continue;
        
        if (num >= l) {
            answer.push(num);
        }
        
        numbers.push(current + '0');
        numbers.push(current + '5');
    }
    
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
