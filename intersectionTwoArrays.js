var intersect = function (num1, num2) {
    const map = new Map();
    const result = [];

    for (let num of num1) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1)
        }
    }


    for (let num of num2) {
        if (map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return result;
}