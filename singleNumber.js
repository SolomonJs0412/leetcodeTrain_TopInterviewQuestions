/**
 * @param {number[]} num
 * @return {number}
 */
var singleNumber = function (num) {
    let res = 0;
    for (let i = 0; i < num.length; i++) {
        res = num[i] ^ res
    }
    return res;
};