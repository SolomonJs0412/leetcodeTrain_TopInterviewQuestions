/**
 * @param {number[]} digits
 * @return {number[]}
 */



var checkMaxValue = function (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] === 10) {
            arr[i - 1]++;
            arr[i] = 0;
        }
    }
    if (arr[0] === 10) {
        arr[0] = 0;
        arr.unshift(1);
        return arr
    }
    return arr;
}

var plusOne = function (digits) {
    if (digits.length === 1) {
        if (digits[0] < 9) {
            digits[0]++
            console.log(digits[0])
            return digits;
        }
        digits[0] = 1;
        digits.push(0)
        return digits;
    } else {
        digits[digits.length - 1] += 1
    }

    return checkMaxValue(digits);
};

let abc = [9, 9, 9]

console.log(plusOne(abc))