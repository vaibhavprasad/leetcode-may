/*

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

 

Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10
 

Note: Your solution should run in O(log n) time and O(1) space.

*/ 

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
//  binary search
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = (start + end ) / 2;
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        } else if (nums[mid] === nums[mid - 1]) {
            if ((mid - 1 - start) % 2 !== 0) {
                end = mid - 2
            } else {
                start = mid + 1;   
            }
        } else if (nums[mid] === nums[mid + 1]) {
            if((end - mid + 1) % 2 !== 0) {
                start = mid + 2;
            } else {
                end = mid - 1
            }
        }
    }
};

