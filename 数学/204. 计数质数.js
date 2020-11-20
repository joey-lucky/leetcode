/*
统计所有小于非负整数 n 的质数的数量。
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let start = 2;
    let primeList = [];
    while (start < n) {
        if (start === 2) {
            primeList.push(start);
        } else {
            let isPromise = true;
            for (let prime of primeList) {
                if (start % prime === 0) {
                    isPromise = false;
                    break;
                }
            }
            if (isPromise) {
                primeList.push(start);
            }
        }
        start++;
    }
    return primeList.length;
};

console.log(countPrimes(499979))
