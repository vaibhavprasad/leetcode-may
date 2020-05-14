/*

Implement Trie (Prefix Tree)
Solution
Implement a trie with insert, search, and startsWith methods.

Example:

var trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

*/


/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.elMap = {};
    this.isEnd = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let tmpPtr = this;
    for (let i = 0; i < word.length; i++) {
        if (!tmpPtr.elMap[word.charAt(i)]) {
            let tmpNode = new Trie();
            tmpPtr.elMap[word.charAt(i)] = tmpNode;
            tmpPtr = tmpNode;
        } else {
            tmpPtr = tmpPtr.elMap[word.charAt(i)];
        }
    }
    tmpPtr.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let tmpPtr = this;
    let i = 0;
    while(i < word.length) {
        if (tmpPtr.elMap[word.charAt(i)]) {
            tmpPtr = tmpPtr.elMap[word.charAt(i)];
            i++;
        } else {
            return false;
        }
    }
    return tmpPtr.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let tmpPtr = this;
    let i = 0;
    while(i < prefix.length) {
        if (tmpPtr.elMap[prefix.charAt(i)]) {
            tmpPtr = tmpPtr.elMap[prefix.charAt(i)];
            i++;
        } else {
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

