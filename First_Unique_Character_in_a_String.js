/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // let mapp = {};
    // for (let i = 0; i < s.length; i++) {
    //     mapp[s.charAt(i)] = mapp[s.charAt(i)] ? {i: i, c: mapp[s.charAt(i)] + 1} :{i: i, c: 1};
    // }
    // let objKey = Object.keys(mapp);
    // for (var i = 0; i < objKey.length; i++) {
    //     if (mapp[objKey[i]].c === 1) {
    //         return mapp[objKey[i]].i;
    //     }
    // }
    // return -1;
    let mapp = {};
    for (let i = 0; i < s.length; i++) {
        mapp[s.charAt(i)] = mapp[s.charAt(i)] ? mapp[s.charAt(i)] + 1 : 1
    }
    let objKey = Object.keys(mapp);
    let rep = 0;
    for (var i = 0; i < objKey.length; i++) {
        if (mapp[objKey[i]] === 1) {
            rep = objKey[i];
            break;
        }
    }
    return rep ? s.indexOf(rep) : -1;
};


