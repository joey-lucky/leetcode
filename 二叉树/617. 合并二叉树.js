require("./common");

/*
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。
*/
/**
 * BFS
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees1 = function (t1, t2) {
    if (t1 === null || t2 === null) return t1 !== null ? t1 : t2;
    let queue1 = [t1];
    let queue2 = [t2];
    while (queue1.length > 0) {
        let len = queue1.length;
        for (let i = 0; i < len; i++) {
            let top1 = queue1.shift();
            let top2 = queue2.shift();
            top1.val = top1.val + top2.val;
            if (top1.left !== null && top2.left !== null) {
                queue1.push(top1.left);
                queue2.push(top2.left);
            } else if (top2.left !== null) {
                top1.left = top2.left;
            }
            if (top1.right !== null && top2.right !== null) {
                queue1.push(top1.right);
                queue2.push(top2.right);
            } else if (top2.right !== null) {
                top1.right = top2.right;
            }
        }
    }
    return t1;
};

// 递归、DFS
var mergeTrees = function (t1, t2) {
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    let node = new TreeNode(t1.val + t2.val);
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);
    return node ;
}

let n1 = TreeNode.create([1, 2, 3, 4, 5, 6]);
let n2 = TreeNode.create([1, 2, 3, 4, 5, 6]);

console.log(mergeTrees(n1, n2))