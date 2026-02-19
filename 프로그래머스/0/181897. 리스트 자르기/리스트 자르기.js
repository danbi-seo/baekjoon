function solution(n, slicer, num_list) {
    const [a, b, c] = slicer
    switch(n) {
        case 1 :
            return num_list.slice(0, b + 1)
            break;
        case 2 :
            return num_list.slice(a, num_list.length)
            break;
        case 3 :
            return num_list.slice(a, b + 1)
            break;
        case 4 :
            return num_list.filter((_, i) => i >= a && i <= b && (i - a) % c === 0)
            break;
    }
}