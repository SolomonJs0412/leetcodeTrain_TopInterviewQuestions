var intersect = function (num1, num2) {
    let sol = [];
    for (let i = 0; i < num2.length; i++) {
        let index = num1.indexOf(num2[i]);
        if (index >= 0) {
            sol.push(num2[i]);
            num1.splice(index, 1);
        }
    }
    return sol.sort();
}