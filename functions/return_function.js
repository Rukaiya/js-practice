function compareBy(propertyName) {
    return function(a, b) {
        let x = a[propertyName];
        let y = b[propertyName];

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}
let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Oppo', price: 27000 },
    { name: 'Samsung', price: 30000 },

]

// sort product by name
console.log('Products sorted by name');
products.sort(compareBy('name'));
console.table(products);

// sort products by price

console.log('Products sorted by price');
products.sort(compareBy('price'));
console.table(products);