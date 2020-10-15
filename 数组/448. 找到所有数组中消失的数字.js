/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    for (let item of nums) {
        item = Math.abs(item);
        nums[item-1] = 0 - Math.abs(nums[item-1]);
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>0 && nums[i]<=nums.length) res.push(i + 1);
    }
    return res;
};


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))