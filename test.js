/*
说明：本题中，我们将空字符串定义为有效的回文串。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let leftCode = s.charCodeAt(left);
        let rightCode = s.charCodeAt(right);
        if (unValid(leftCode)) {
            left++;
        } else if (unValid(rightCode)) {
            right--;
        } else {
            leftCode = leftCode >= 97 ? leftCode - 32 : leftCode;
            rightCode = rightCode >= 97 ? rightCode - 32 : rightCode;
            if (leftCode!==rightCode) {
                return false
            }
            left++;
            right--;
        }
    }
    return true;
};

var unValid = function (code) {
    // 大写字母65~90 小写字母97~122 数字48~57
    return code < 48 || code > 122 || (code > 57 && code < 65) || (code > 90 && code < 97)
}


// console.log(isPalindrome("OP"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("aba"));