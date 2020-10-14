/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    let sumNums = [nums[0], nums[1], nums[0] + nums[2]];
    for (let i = 3; i < nums.length; i++) {
        sumNums[i] = Math.max(sumNums[i - 2], sumNums[i - 3]) + nums[i];
    }
    return Math.max(sumNums[sumNums.length - 1], sumNums[sumNums.length - 2]);
};


console.log(rob([1, 2, 3, 4, 5]))