const numbers = [1, 3, 5, 2];

function myFunc(total, value, index, array) {
    console.log(`Total: ${total}, ${value}, ${index}`);

    return total + value;
}

const newNumbers = numbers.reduce(myFunc);
console.log(newNumbers);