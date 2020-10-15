require("./common");

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null ) return null;
    let queue = [root];
    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let top = queue.shift();
            let left = top.left;
            top.left = top.right;
            top.right = left;
            if (top.left!==null) queue.push(top.left);
            if (top.right!==null) queue.push(top.right);
        }
    }
    return root;
};

let n = TreeNode.create([1, 2, 3, 4, 5, 6, 7]);
console.log(invertTree(n).toString())

// BFS