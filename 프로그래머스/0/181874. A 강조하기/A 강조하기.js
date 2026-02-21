function solution(myString) {
    return [...myString]
        .map(ch =>
            ch === 'a'
                ? 'A'
                : ch !== 'A' && ch === ch.toUpperCase()
                ? ch.toLowerCase()
                : ch
        )
        .join('');
}
