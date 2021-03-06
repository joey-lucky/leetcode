/*
给定一个无重复元素的有序整数数组 nums 。

返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

列表中的每个区间范围 [a,b] 应该按如下格式输出：

"a->b" ，如果 a != b
"a" ，如果 a == b
*/


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    let curr = [];
    for (let num of nums) {
        if (num - curr[1] <= 1) {
            curr[1] = num;
        } else {
            curr = [num, num];
            res.push(curr);
        }
    }
    for (let i = 0; i < res.length; i++) {
        let arr = res[i];
        if (arr[0] === arr[1]) {
            res[i] = ""+arr[0];
        } else {
            res[i] = arr[0] + "->" + arr[1];
        }
    }
    return res;
};


console.log(summaryRanges([0, 1, 2, 4, 5, 7]));