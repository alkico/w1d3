// primitives are passed by value - objects are passed by reference


// primitives are passed / copied by value

// let name = 'bob';

// let copy = name;

// copy = 'alice'
// the original doesn't change
// console.log(name)


// objects are passed / copied by reference

// let name = ['bob'];

// let copy = name;
// copy.push('alice');

// the original does change
// console.log(name);



// exmaple with a function to make it more clear

// const names = ['jim', 'mary']

// function addName(array, name) {
//     array.push(name)
//     return array;
// }

// console.log(addName(names, 'bob'));

// console.log(names)

// then add the copy

// const names = ['jim', 'mary'];

// function addName(array, name) {
//     const copy = array.slice();
//     copy.push(name)
//     return copy;
// }

// console.log(addName(names, 'bob'));

// console.log(names)

// same with objects


// copying an array

// using slice()
// const ar = [1, 2, 3];
// const copy = ar.slice();

// using the spread operator
// const copy = [...ar];

// or using JSON parse and stringify


// comparing arrays 
// const ar1 = [2, 3];
// const ar2 = [2, 3];

// console.log(ar1 === ar2);
// use JSON.stringify()
// console.log(JSON.stringify(ar1) === JSON.stringify(ar2));
// console.log(JSON.stringify(ar1));

// making a copy of an object

// using JSON parse and stringify
// const person1 = { name: 'joe' };

// const copy = JSON.parse(JSON.stringify(person1))

// copy.age = 34;

// console.log(person1);



// “If you do not use Dates, functions, undefined, Infinity, 
// [NaN], RegExps, Maps, Sets,  ImageDatas, 
// sparse Arrays, Typed Arrays or other complex types within your object, 
// a very simple one liner to deep clone an object is: JSON.parse(JSON.stringify(object))”


// mutable - immutable methods 
// arrays 
// you should not mutate the original array 
// check doesitmutate.xyz and if it mutates then make a copy instead

// for objects : 

//direct addition of fields mutates 

// adding a field to an object without mutating original
const person1 = { name: 'joe', email: 'j@gmail.com' };

// we want to have now a person with an age field added:
const person1WithAge = { ...person1, age: 34 };

// console.log(person1WithAge);