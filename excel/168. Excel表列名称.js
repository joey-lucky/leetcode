/*
给定一个正整数，返回它在 Excel 表中相对应的列名称。

例如，

1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB
...
示例 1:

输入: 1
输出: "A"
示例 2:

输入: 28
输出: "AB"
示例 3:

输入: 701
输出: "ZY"
*/


/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let arr = [];
    let aCharCode = "A".charCodeAt(0);
    for (let i = aCharCode; i < aCharCode + 26; i++) {
        arr.push(String.fromCharCode(i));
    }
    let res = "";
    while (n > 0) {
        let count = (n - 1) % 26;
        res = arr[count] + res;
        n = Math.floor((n - 1) / 26);
    }
    return res;
};


console.log(convertToTitle(26))
console.log(convertToTitle(27))
console.log(convertToTitle(28))
console.log(convertToTitle(53))
console.log(convertToTitle(701))
