function solution(arr) {
    let X = []
    for(a of arr){
        for(let i = 0; i < a; i++){
             X.push(a)   
        }
    }
    return X;
}