function add(a, b) {
    return a + b;
}

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, add);

console.log(result);