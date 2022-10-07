/**
 * @param {number[]} num
 * @return {number}
 */
var removeDuplicates = function (num) {
    let cns = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== num[i - 1]) {
            num[cns] = num[i];
            cns += 1;
        }
    }
    return cns;
};