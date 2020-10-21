/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
*/
// let aCode = "a".charCodeAt(0);
// let zeroCode = "2".charCodeAt(0);
// let maxCode = aCode + 23;
// for (let i = aCode; i < maxCode;) {
//     arr.push([
//         String.fromCharCode(i),
//         String.fromCharCode(i + 1),
//         String.fromCharCode(i + 2),
//     ]);
//     if (String.fromCharCode(i) === "p" || String.fromCharCode(i) === "w") {
//         arr[arr.length - 1].push(String.fromCharCode(i + 3));
//         i += 4;
//     } else {
//         i += 3;
//     }
// }


let PHONE_STR = [
    [ 'a', 'b', 'c' ],
    [ 'd', 'e', 'f' ],
    [ 'g', 'h', 'i' ],
    [ 'j', 'k', 'l' ],
    [ 'm', 'n', 'o' ],
    [ 'p', 'q', 'r', 's' ],
    [ 't', 'u', 'v' ],
    [ 'w', 'x', 'y', 'z' ]
]

/**
 * 递归
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations1 = function (digits) {
    if (digits.length === 0) return [];
    if (digits.length === 1) {
        return PHONE_STR[Number.parseInt(digits) - 2];
    } else {
        let leftStrArr = letterCombinations(digits.substr(0, 1));
        let rightStrArr = letterCombinations(digits.substr(1));
        let arr = []
        for (let i = 0; i < leftStrArr.length; i++) {
            for (let j = 0; j < rightStrArr.length; j++) {
                arr.push(leftStrArr[i] + rightStrArr[j]);
            }
        }
        return arr;
    }
};

/**
 * 队列
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations= function (digits) {
    if (digits.length === 0) return [];
    let queue = [""];
    let split = digits.split("");
    for (const str of split) {
        let index = Number.parseInt(str) - 2;
        let arr = PHONE_STR[index];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let top = queue.shift() ;
            for (let str of arr) {
                queue.push(top + str);
            }
        }
    }
    return queue;
};

console.log(letterCombinations("23"));