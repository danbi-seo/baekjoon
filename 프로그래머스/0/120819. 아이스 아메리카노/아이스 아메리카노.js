function solution(money) {
    let coffee = Math.floor(money / 5500)
    let change = money % 5500
    return [coffee, change];
}