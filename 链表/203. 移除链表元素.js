require("./common");
/*
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
*/

var removeElements = function (head, val) {
    if (head === null) return null;
    if (head.val !== val) {
        head.next = removeElements(head.next, val);
    } else {
        head = removeElements(head.next, val);
    }
    return head;
};


console.log(removeElements(ListNode.create([1, 2, 3, 4, 5, 3, 4]), 3).toString())
console.log(removeElements(ListNode.create([1, 2, 3, 4, 5, 3, 1]), 1).toString())
console.log(removeElements(ListNode.create([1, 1]), 1).toString())