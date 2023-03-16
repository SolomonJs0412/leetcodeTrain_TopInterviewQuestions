/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i);
            nums.push(0);
        }
    }
    return nums
};

let abc = [1, 8, 3, 0, 9, 7, 8]

console.log(moveZeroes(abc))