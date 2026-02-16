function solution(my_string, queries) {
    for([s, e]of queries){
        const A = my_string.slice(0, s)
        const B = my_string.slice(s, e+1).split("").reverse().join("")
        const C = my_string.slice(e+1)
        
        my_string = A + B + C
    }
    return my_string;
}