function solution(strArr) {
    const count = {};
    for(const str of strArr){
        count[str.length] = (count[str.length] || 0) + 1
    }
    let max = 0;
    for(const key in count){
        max = Math.max(max, count[key])
    }
    return max;
}