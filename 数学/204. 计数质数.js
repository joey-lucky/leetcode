/*
统计所有小于非负整数 n 的质数的数量。
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    const isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; ++i) {
        if (isPrime[i] === 1) {
            ans += 1;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    return ans;
};

console.log(countPrimes(4999799))
