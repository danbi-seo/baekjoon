function solution(arr) {
    const stk = [];

    for (const num of arr) {
        if (stk.length === 0) {
            stk.push(num);
        } else if (stk[stk.length - 1] === num) {
            stk.pop();
        } else {
            stk.push(num);
        }
    }

    return stk.length === 0 ? [-1] : stk;
}