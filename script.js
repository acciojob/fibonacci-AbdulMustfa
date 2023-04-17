function fibonacci(num) {
  if (num < 0 || num > 50) {
    return null;
  } else if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let prevPrev = 0;
    let prev = 1;
    let current;
    for (let i = 2; i <= num; i++) {
      current = prevPrev + prev;
      prevPrev = prev;
      prev = current;
    }
    return current;
  }
}


module.exports = fibonacci;
