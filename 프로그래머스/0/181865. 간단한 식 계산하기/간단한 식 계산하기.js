function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    const A = Number(a);
    const B = Number(b);
    switch(op){
        case '+' :
            return A + B
        case '-' :
            return A - B
        case '*' :
            return A * B
    }
}