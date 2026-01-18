function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    let min = Infinity;

    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < min) {
        min = arr[i];
      }
    }

    return min === Infinity ? -1 : min;
  });
}
