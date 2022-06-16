let colors = ['red', 'blue', 'green'];
let rgb = [...colors]
console.log('colors are:');

console.log(rgb);

// target object with setter
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value) {
        this.radius = value / 2;
        console.log('SET ', value);
    }
    get diameter() {
        return this.radius * 2;
    }
}

let circle = new Circle(200);

let cloneCircle1 = Object.assign(circle, {
    diameter: 400
});

let cloneCircle2 = {
    ...circle
};

// target objects with read-only property
const blueSquare = {
    length: 100,
    color: 'blue'
}

Object.defineProperty(blueSquare, 'color', {
    value: 'blue',
    enumerable: true,
    writable: false

});

console.log(blueSquare);

const style = {
    color: 'green'
}

const greenSquare = {
    ...blueSquare,
    ...style
}
console.log(greenSquare);
