/**
 * @param {number[]} num
 * @return {boolean}
 */
var containsDuplicate = function (num) {
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] === num[j]) {
                return true;
            }
        }
    }
    return false;
};