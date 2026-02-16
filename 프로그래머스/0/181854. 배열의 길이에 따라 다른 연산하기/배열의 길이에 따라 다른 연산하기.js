function solution(arr, n) {
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === (arr.length % 2 === 1 ? 0 : 1)){
            arr[i] += n
        }
    }
    return arr;
}