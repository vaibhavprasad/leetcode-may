/*

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

You may assume that both strings contain only lowercase letters.

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineObj = {};
    magazine.split('').forEach(item => {
        magazineObj[item] = magazineObj[item] ? magazineObj[item] + 1 : 1; 
    });
    let flag = true;
    ransomNote.split('').forEach(item => {
        let elCount = magazineObj[item] ? magazineObj[item] - 1 : -1;
        if (elCount < 0) {
            flag = false;
        } else {
            magazineObj[item] = elCount;
        }
    });
    return flag;
};

