/*
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let preIndex = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if ((i - preIndex[num]) <= k) return true;// NaN 判断大小是false
        preIndex[num] = i;
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3))