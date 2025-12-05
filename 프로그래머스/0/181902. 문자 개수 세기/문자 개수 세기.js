function solution(my_string) {
    const result = Array(52).fill(0);

    for (let ch of my_string) {
        const code = ch.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            // A(65) ~ Z(90)
            result[code - 65] += 1;
        } else if (code >= 97 && code <= 122) {
            // a(97) ~ z(122)
            result[26 + (code - 97)] += 1;
        }
    }

    return result;
}
