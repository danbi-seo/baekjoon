function solution(rank, attendance) {
    let arr = [];

    for (let i = 0; i < rank.length; i++) {
        if (attendance[i]) {
            arr.push([rank[i], i]);
        }
    }

    arr.sort((a, b) => a[0] - b[0]);

    let a = arr[0][1];
    let b = arr[1][1];
    let c = arr[2][1];

    return 10000 * a + 100 * b + c;
}