function fibonacci(num) {
  // memoize previous results
  const memo = {};

  function fibonacciHelper(num) {
    // check memoization cache
    if (memo[num] !== undefined) {
      return memo[num];
    }

    // base cases
    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    }

    // recursive case
    else {
      const result = fibonacciHelper(num - 1) + fibonacciHelper(num - 2);
      memo[num] = result; // memoize result
      return result;
    }
  }

  return fibonacciHelper(num);
}
// calculate the 10th Fibonacci number (should be 55)
console.log(fibonacci(10));
