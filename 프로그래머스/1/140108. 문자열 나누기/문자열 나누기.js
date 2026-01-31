function solution(s) {
  let count = 0;
  let x = '';
  let countX = 0;
  let countOther = 0;

  for (let i = 0; i < s.length; i++) {
    if (countX === 0 && countOther === 0) {
      x = s[i];
      countX = 1;
    } else {
      if (s[i] === x) countX++;
      else countOther++;
    }

    if (countX === countOther) {
      count++;
      countX = 0;
      countOther = 0;
    }
  }

  if (countX !== 0 || countOther !== 0) {
    count++;
  }

  return count;
}
