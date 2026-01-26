function solution(num_list) {
  let a = 0, b = 0;
  num_list.forEach((v, i) => (i % 2 === 0 ? a += v : b += v));
  return Math.max(a, b);
}