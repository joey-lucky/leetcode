/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).split("").filter(item => item === "1").length;
};

console.log(hammingDistance(1, 4));