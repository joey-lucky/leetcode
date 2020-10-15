require("./common");


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) return null;
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }
    return pA;
};

let n = ListNode.create([5, 6, 7]);
let n1 = ListNode.create([1, 2, 3, 4]);
let n2 = ListNode.create([-1, -2, -3, -4]);
n1.next.next.next.next = n;
n2.next.next.next.next = n;
console.log(getIntersectionNode(n1, n2))


/*
可以理解成两个人同时跑步，跑了相同路程的情况下，会在公共区域相遇。
*/
