require("./common");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let res = null;
    let next;
    while (head !== null) {
        next = head.next;
        head.next = res;
        res = head;
        head = next;
    }
    return res;
};

let node = ListNode.create([1, 2, 3, 4, 5]);
console.log(reverseList(node).toString())