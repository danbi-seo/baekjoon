function solution(num_list) {
    return Number(num_list.filter(n => n % 2).join('')) + Number(num_list.filter(n => n % 2 === 0).join(''))
}