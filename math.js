let min = 2;
let max = 10;

console.log('Random number min(include)..max(exclude)');
console.log(Math.random() * (max - min) + min);

console.log('Random number min(include)..max(include)');
console.log(Math.random() * (max - min + 1) + min);
console.log(new Date().getDay());