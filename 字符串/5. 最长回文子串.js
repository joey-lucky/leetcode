/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = "";
    for (let left = 0; left < s.length && res.length < s.length - left; left++) {
        for (let right = s.length - 1; right >= left && res.length < right - left + 1; right--) {
            let item = s.substring(left, right+1);
            if (isPalindrome(item)) {
                res = item;
            }
        }
    }
    return res;
};

var isPalindrome = function (str = "") {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str.charAt(left) !== str.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
}


console.log(longestPalindrome("ab"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aabbade"));
console.log(longestPalindrome("bb"));