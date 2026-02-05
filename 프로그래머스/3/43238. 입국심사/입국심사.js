function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let people = times.reduce((sum, t) => sum + Math.floor(mid / t), 0);

        if (people >= n) {
            answer = mid;      
            right = mid - 1;  
        } else {
            left = mid + 1;    
        }
    }

    return answer;
}
