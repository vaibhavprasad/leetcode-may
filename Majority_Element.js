/*

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majEl = nums[0];
    let count = 1;
    let i = 1;
    while (i < nums.length) {
        if (majEl === nums[i]) {
            count++;
        } else {
            count -= 1;
            if (count === 0) {
                majEl = nums[i];
                count++;
            }
        }
        i++;
    }
    return majEl;
};

