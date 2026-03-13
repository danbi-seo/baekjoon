function solution(babbling) {
    var answer = 0;
    for(const str of babbling){
        let word = str.replace(/aya|ye|woo|ma/g,"");
        if(word === ""){
            answer++
        }
    }
    return answer;
}