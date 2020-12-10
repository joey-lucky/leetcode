/*
给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
*/


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo1 = function (n) {// 字符串法
    return n > 0 && n.toString(2).split("1").length === 2;
};

var isPowerOfTwo2 = function (n) {
    return n > 0 && (n & (n - 1)) === 0;
};


console.log(isPowerOfTwo2(1));
console.log(isPowerOfTwo2(-16));
