/**
 * @param {number[]} num1
 * @param {number[]} num2
 * @return {number[]}
 */
var intersect = function (num1, num2) {
    let ins = [];
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            if (num1[i] === num2[j]) {
                for (let z = 0; z < ins.length; z++) {
                    if (num1[i] !== ins[z]) {
                        ins.push(num1[i]);
                    }
                }
            }
        }
    }
    for (let i = 0; i < ins.length; i++) {
        console.log(ins[i]);
    }

    return ins

    // for (let i = 0; i < num1.length; i++) {
    //     for (let j = 0; j < num2.length; j++) {
    //         if (num1[i] === num2[j]) {
    //             ins.push(num1[i]);
    //             num1.slice(num1[i])
    //         }
    //     }
    // }

    // if ()

    //     for (let i = 0; i < ins.length; i++) {
    //         console.log(ins[i]);
    //     };
}
let abc = [1, 2, 2, 1]
let xyz = [2, 2]

console.log(intersect(abc, xyz));
