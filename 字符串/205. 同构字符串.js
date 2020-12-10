/*
给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
*/


/**
 * 记录字符串上一次出现的位置
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let preIndex1 = [];
    let preIndex2 = [];
    for (let i = 0; i < s.length; i++) {
        let code1 = s.charCodeAt(i);
        let code2 = t.charCodeAt(i);
        if (preIndex1[code1]!==preIndex2[code2]) return false;
        preIndex1[code1] = i;
        preIndex2[code2] = i;
    }
    return true;
};

console.log(isIsomorphic("acb", "egg"))