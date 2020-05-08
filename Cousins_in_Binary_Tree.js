/*

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

 

Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
 

Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xData = getDepth(x, root);
    let yData = getDepth(y, root);
    return xData.level === yData.level && xData.parent.val !== yData.parent.val;
};

function getDepth (key, root) {
    return (function getDepth(root, key, level, parent) {
        if(root === null) {
            return {level: -1, parent: parent};
        } else if (root.val === key) {
            return {level: level, parent: parent};
        } else {
            var tmp = getDepth(root.left, key, level + 1, root);
            if (tmp.level === -1) {
                level = getDepth(root.right, key, level + 1, root); 
            } else {
                return tmp;
            }
            return level;
        }
    })(root, key, 0, null);
}

