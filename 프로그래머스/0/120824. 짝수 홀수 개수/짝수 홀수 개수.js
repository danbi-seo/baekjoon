function solution(num_list) {
    let even_num = 0
    let odd_num = 0
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            even_num++;
        } else{
            odd_num++;
        }
    }
    return [even_num, odd_num]
}