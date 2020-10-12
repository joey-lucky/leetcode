global.ListNode = function ListNode(val) {
    this.val = val;
    this.next = null;
}

global.ListNodeUtils = {
    create:function (arr=[]) {
        let head = new ListNode("head");
        let temp = head;
        for (let v of arr) {
            temp.next = new ListNode(v);
            temp = temp.next;
        }
        return head.next;
    },

    toString:function (node) {
        let res = [];
        while (node !== null) {
            res.push(node.val);
            node = node.next;
        }
        return res;
    }
};