function solution(phone_book) {
    const map = new Map();

    for (const number of phone_book) {
        map.set(number, true);
    }

    for (const number of phone_book) {
        let check = "";

        for (let i = 0; i < number.length - 1; i++) {
            check += number[i];

            if (map.has(check)) {
                return false;
            }
        }
    }

    return true;
}
