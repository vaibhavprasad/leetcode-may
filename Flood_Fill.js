/*

An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Example 1:
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (image.length === 0) {
        return image;
    }
    let visited = {};
    const rows = image.length;
    const cols = image[0] && image[0].length ? image[0].length : 0;
    const oldCol = image[sr][sc];
    let stack = [];
    stack.push({r: sr, c: sc});
    while (stack.length > 0) {
        let curEl = stack.pop();
        let tmpSr = curEl['r'];
        let tmpSc = curEl['c'];
        image[tmpSr][tmpSc] = newColor;
        visited[generateCode(tmpSr, tmpSc, cols)] = true;
        if (isValid(tmpSr - 1, tmpSc,rows, cols, oldCol, image, visited)) {
            stack.push({r: tmpSr - 1, c: tmpSc});
        }
        if (isValid(tmpSr, tmpSc + 1,rows, cols, oldCol, image, visited)) {
            stack.push({r: tmpSr, c: tmpSc + 1});
        }
        if (isValid(tmpSr + 1, tmpSc,rows, cols, oldCol, image, visited)) {
            stack.push({r: tmpSr + 1, c: tmpSc});
        }
        if (isValid(tmpSr, tmpSc - 1,rows, cols, oldCol, image, visited)) {
            stack.push({r: tmpSr, c: tmpSc - 1});
        }
    }
    return image;
};

function isValid (tmpSr, tmpSc,rows, cols, oldCol, image, vMap) {
    if (tmpSr < 0 || tmpSc < 0 || tmpSr >= rows || tmpSc >= cols) {
        return false
    } else if ((image[tmpSr][tmpSc] === oldCol) && (!findInMap(tmpSr, tmpSc, cols, vMap))){
        return true;
    } else {
        return false;
    }
}

function generateCode (row, column, totalColumns) {
    return totalColumns * row + column;
}

function findInMap (row, column, tc, vMap) {
    return !!vMap[tc * row + column];
}
