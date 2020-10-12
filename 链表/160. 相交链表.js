import "./common";


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

};

let n = ListNodeUtils.create([5, 6, 7]);
let n1 = ListNodeUtils.create([1, 2, 3, 4]);
let n2 = ListNodeUtils.create([-1, -2, -3,-4]);
n1.next.next.next.next = n;
n2.next.next.next.next = n;
console.log(getIntersectionNode(n1,n2))

