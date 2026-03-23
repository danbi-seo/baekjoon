function solution(dots) {
    const isParallel = (a, b, c, d) => {
        const [x1, y1] = a;
        const [x2, y2] = b;
        const [x3, y3] = c;
        const [x4, y4] = d;
        
        return (y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1);
    };
    
    if (isParallel(dots[0], dots[1], dots[2], dots[3])) return 1;
    if (isParallel(dots[0], dots[2], dots[1], dots[3])) return 1;
    if (isParallel(dots[0], dots[3], dots[1], dots[2])) return 1;
    
    return 0;
}