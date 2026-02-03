function solution(nums) {
    const kinds = new Set(nums).size;
    return Math.min(kinds, nums.length / 2);
}