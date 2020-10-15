global.TreeNode = function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;

    this.toString = function () {
        let queue = [this];
        let res = [];
        while (queue.length>0) {
            let len = queue.length;
            for (let i = 0; i < len; i++) {
                let top = queue.shift();
                res.push(top.val);
                if (top.left!==null) queue.push(top.left);
                if (top.right!==null) queue.push(top.right);
            }
        }
        return res;
    }
}
global.TreeNode.create = function (arr = []) {
    let head = new TreeNode(arr[0]);
    let queue = [head];
    for (let i = 1; i < arr.length;) {
        let n = queue.shift();
        n.left = new TreeNode(arr[i]);
        queue.push(n.left);
        if (i + 1 < arr.length) {
            n.right = new TreeNode(arr[i + 1]);
            queue.push(n.right);
        }
        i += 2;
    }
    return head;
};
