const person = {
    firstName: 'Rukaiya',
    lastName: 'Amin',
    fullName: function() {
        return person.firstName + " " + person.lastName;
    }
};
let x = person.fullName();
console.log(x);