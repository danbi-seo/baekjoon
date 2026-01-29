function solution(num_list) {
    if(num_list.length >10){
        return num_list.reduce((sum, v) => sum + v, 0);
    }
    return num_list.reduce((prod, v) => prod * v, 1);
}