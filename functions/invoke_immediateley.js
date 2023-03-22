// invoked immediately by trailing parentheses
(function() {
    console.log('Invoked immediately');
})();

// passing parameters

let person = {
    firstName: 'Rukaiya',
    lastName: 'Amin'
};

(function() {
    console.log(person.firstName + ' ' + person.lastName);
})(person);