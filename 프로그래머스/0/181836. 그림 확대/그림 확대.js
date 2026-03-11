function solution(picture, k) {
    let answer = [];
    for(let row of picture){
        for(let i = 0; i < k; i++){
            answer.push([...row].map(v=>v.repeat(k)).join(""))
        }
    }
    return answer;
}