require("./common");

/*给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
*/

/**
 * 常规套入，先进栈再删除
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let arr = [head];
    while (head.next !== null) {
        arr.push(head.next);
        head = head.next;
    }
    let deleteIndex = arr.length - n;
    if (deleteIndex === 0) {
        arr[0] = arr[1];
    } else if (deleteIndex === arr.length - 1) {
        arr[deleteIndex - 1].next = null;
    } else {
        arr[deleteIndex - 1].next = arr[deleteIndex + 1];
    }
    return arr[0] === undefined ? new ListNode() : arr[0];
};

/**
 * 双指针一次遍历
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function (head, n) {
    let left = head;
    let right = head;
    for (let i = 0; i < n; i++) {
        right =right.next;
    }
    // 表示删除的是倒数最后一个元素
    if (right === null) {
        return head.next;
    }
    while (right.next !== null) {
        left = left.next;
        right = right.next;
    }
    //表示删除的是倒数第一个元素
    if (left.next === right) {
        left.next = null;
    } else {
        left.next = left.next.next;
    }
    return head;
};


let ln = ListNode.create([1, 2, 3, 4, 5]);
console.log(removeNthFromEnd1(ln, 2).toString())
console.log(removeNthFromEnd1(ListNode.create([1]), 1).toString())