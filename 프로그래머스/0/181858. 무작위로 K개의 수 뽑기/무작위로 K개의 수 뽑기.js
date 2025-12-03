function solution(arr, k) {
  const result = [];
  const used = new Set();

  for (const v of arr) {
    if (!used.has(v)) {
      result.push(v);
      used.add(v);
    }
    if (result.length === k) break;
  }

  while (result.length < k) result.push(-1);

  return result;
}