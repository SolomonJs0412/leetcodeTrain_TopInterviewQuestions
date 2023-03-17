/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        let temp = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (temp - nums[j] === 0) {
                return [i, j];
            }
        }
    }
};

let abc = [7, 5, 5, 11]
let tg = 16

console.log(twoSum(abc, tg))