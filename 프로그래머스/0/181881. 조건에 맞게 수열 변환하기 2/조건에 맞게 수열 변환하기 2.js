function solution(arr) {
    var answer = 0;
    current = arr
    
    while(true){
        const next = current.map(n => {
            if(n >= 50 && n % 2 === 0){
                return n / 2;
            } else if(n < 50 && n % 2 === 1){
                return n * 2 + 1
            } else {
                return n
            }
        });
        if(current.every((v, i) => v === next[i])){
            return answer
        }
        current = next;
        answer++;
    }
}