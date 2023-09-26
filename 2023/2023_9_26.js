/* <1> https://www.codewars.com/kata/5121303128ef4b495f000001/train/javascript
The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:

var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name           // should == 'Joe'
*/

class Person {
  constructor(name) {
    this.name = name;
  }
  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}
//</1>

//<------------------------------------------------------->
/* <2> https://leetcode.com/problems/search-in-a-binary-search-tree/description
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
 

Example 1:
Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Example 2:

Input: root = [4,2,7,1,3], val = 5
Output: []

 

Constraints:
    The number of nodes in the tree is in the range [1, 5000].
    1 <= Node.val <= 107
    root is a binary search tree.
    1 <= val <= 107



*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let curr = root;

  while (curr) {
    if (curr.val === val) {
      return curr;
    }

    if (curr.val > val) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
  return null;
};
//</2>
