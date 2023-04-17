function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let fibList = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibList.push(fibList[i - 1] + fibList[i - 2]);
    }
    return fibList[num];
  }
}
module.exports = fibonacci;
