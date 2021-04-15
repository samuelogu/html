// variables
// data types
// Operators
// arrays and objects
// loops
// functions
// conditional statements
// classes
// DOM - Document object model

const name = 'Samuel Ogu'
let email = 'psalm294u@gmail.com'
let age = 34

console.log(typeof age)

// name = 'James Audu'

console.log(name+' is a boy');
console.log('His name is '+name);
console.log(name+' has a car');

//Data
// string 'Saku' "Saku"
// integer 156
// Float 56.76
// Boolean True or False
// Object {}
// Array []

//Array
let names = ['Samuel', 'Miracle', 345]
let person = {
    name: 'Samuel Ogu',
    email: 'psalm294u@gmail.com',
    age: 45,
    favouriteFoods: ['Rice', 'Beans']
}

let people = [{name: 'James', email: 'james@gmail.com', age: 24}, person, 'peter']

// console.log(person.name);
// console.log(names[2]);
// console.log(people);

console.log(people.length);

//Functions

function greetings(name, email = 'email@gmail.com') {
    console.log('Hello '+name+', welcome to my website')
    console.log(name+' email address is '+email)
}

greetings('Lord Jane', 'psalm294u@gmail.com')

// Operators

let firstNumber = 45
let secondNumber = 89
let result = firstNumber * secondNumber

console.log(result);

function calculate(a, b, c) {
    let x = ((b * b) - (4 * a * c))
}