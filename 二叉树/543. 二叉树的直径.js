require("./common");
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    var res = 0;
    function depth (node) {
        if (node === null) return 0;
        let left = depth(node.left);
        let right = depth(node.right);
        res = Math.max(res, left + right);
        return Math.max(left, right) + 1;
    }
    depth(root);
    return res;
};

console.log(diameterOfBinaryTree(TreeNode.create([1, 2, 3, 4, 5])))
console.log(diameterOfBinaryTree(TreeNode.create([1])))
console.log(diameterOfBinaryTree(TreeNode.create([1, 2])));

/*
获取节点最大深度，并比较当前节点的左右深度，取最大值。
*/
