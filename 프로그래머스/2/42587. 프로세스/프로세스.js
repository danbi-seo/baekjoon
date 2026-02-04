function solution(priorities, location) {
    let count = 0;
    while(true){
        const current = priorities.shift()
        if(priorities.some(p => p > current)){
            priorities.push(current);
            location = location === 0 ? priorities.length - 1 : location -1;
        } else {
            count++
            if(location === 0) return count;
            location--
        }
    }
}