/*

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:



Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:



Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.

*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    /**
     *Using formula (y1-y0) / (x1-x0) === (y2-y0) / (x2-x0)
     *
    */
    if (coordinates.length <= 2) {
        return true;
    }
    let isStraight = false;
    for (var i = 0; i + 2 < coordinates.length; i++) {
        if ( slope(coordinates[i + 1], coordinates[i]) === slope(coordinates[i + 2], coordinates[i])) {
            isStraight = true;
        } else {
            isStraight = false;
            break;
        }
    }
    return isStraight;
};
function slope (point1, point2) {
    return (point2[1] - point1[1]) / (point2[0] - point1[0]);
}

