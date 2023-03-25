/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    if (s.length % 2 === 0) {
        let temp = "";
        for (let i = 0; i < s.length / 2 - 1; i++) {
            for (let j = s.length - 1; j > s.length / 2; j--) {
                temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            }
        }
        return s;
    };
}
let s = ["1", "2", "3", "4", "5", "6"]
console.log(reverseString(s));