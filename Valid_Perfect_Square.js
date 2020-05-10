/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
//     Iterating till the num / 2 and checking if i * i === num
    if( num === 0 ) return false;
    if ( num ===1 ) return true;
    for (let i = 2; i <= num / 2; i++) {
        let sqr = i * i;
        if ( sqr === num ) {
            return true;
        }
        if (sqr < num) {
            continue;
        } else {
            return false;
        }
    }
    return false;
    
// //     Binary method - not working
//     if( num === 0 ) return false;
//     if ( num ===1) return true;
    
//     let end = num;
//     let start = 1;
//     while (start < end) {
//         let cur = Math.ceil((start + end) / 2);
//         let sq = cur * cur;
//         if (sq === num) {
//             return true;
//         } else if (sq > num) {
//             end = cur;
//         } else {
//             start = cur;
//         }
//     }
//     return false
};
