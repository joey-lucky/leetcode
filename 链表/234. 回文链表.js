require("./common");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left]!== arr[right]) return false;
        left++;
        right--;
    }
    return true;
};


let n = ListNode.create([1,2,3,4,5,5,4,3,2,1]);
console.log(isPalindrome(n))