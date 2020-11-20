/*
给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
*/
var containsDuplicate = function(nums = []) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 5, 7, 8]));