function solution(myString, pat) {
    let answer = "";

    for (let char of myString) {
        answer += char === "A" ? "B" : "A";
    }

    return answer.includes(pat) ? 1 : 0;
}
