/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // O(n2)
    if(nums.length <= 1) return nums.length
    let set = new Set(nums)
    let max = 0

    for(let i = 0; i < nums.length; i++) {
        if(!set.has(nums[i] - 1)) {
            let count = 0
            while(set.has(nums[i] + count)) {
                count++
            }
        max = Math.max(max, count)
        }

    }

    return max
};