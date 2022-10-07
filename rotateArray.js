/**
 * @param {number[]} num
 * @param {number} k
 * @return {void} Do not return anything, modify num in-place instead.
 */
var rotate = function (num, k) {

    let newArr = [];
    let len = num.length;
    for (var i = 0; i < num.length; i++) {
        newArr[(i + k) % len] = num[i];
    }
    for (let i = 0; i < newArr.length; i++) {
        num[i] = newArr[i];
    }
    return num;
};