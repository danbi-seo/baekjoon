function solution(my_string, indices) {
    const removeSet = new Set(indices);
    
    return my_string
        .split("")
        .filter((_, index) => !removeSet.has(index))
        .join("");
}
