/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var moveZeroes = function (nums) {
    let countZero = 0;
    nums = nums.filter((element) => {
        if (element === 0) {
            countZero++
        }
        return element !== 0
    });
    for (let i = 0; i < countZero; i++) {
        nums.push(0);
    }

    return nums;
};


let abc = [0, 1, 0, 3, 12]

console.log(moveZeroes(abc))