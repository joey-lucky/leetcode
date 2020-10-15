global.ListNode = function ListNode(val) {
    this.val = val;
    this.next = null;

    this.toString= function () {
        let node = this;
        let res = [];
        while (node !== null) {
            res.push(node.val);
            node = node.next;
        }
        return res;
    }
}

global.ListNode.create = function (arr = []) {
    let head = new ListNode("head");
    let temp = head;
    for (let v of arr) {
        temp.next = new ListNode(v);
        temp = temp.next;
    }
    return head.next;
};
