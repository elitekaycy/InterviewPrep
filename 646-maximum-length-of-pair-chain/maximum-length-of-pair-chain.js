/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    

    // special sort -> nlogn time
    pairs.sort((a, b) => a[1] - b[1])
    let count = 0
    let curr = -Infinity

    for(const [l, r] of pairs) {
        if(curr < l) {
            curr = r
            count++
        }
    }
    

    return count
};