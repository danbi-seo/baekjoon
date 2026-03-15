function solution(rank, attendance) {
    let answer = [];

    for (let i = 0; i < rank.length; i++) {
        if (attendance[i]) {
            answer.push([rank[i], i]);
        }
    }

    answer.sort((a, b) => a[0] - b[0]);

    let a = answer[0][1];
    let b = answer[1][1];
    let c = answer[2][1];

    return 10000 * a + 100 * b + c;
}