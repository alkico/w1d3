// objects
// objects are an unordered, keyed collection of any various values.


let emptyObj = {};

// property value / key - value
let objStructure = {
    key1: 'value',
    key2: 'value'
}

const student = {
    firstName: "Tim",
    age: 31,
    email: "tim@ironhack.com",
    hobbies: ["cycling"],
};

// accessing a value
// dot notation
// console.log(student.email);

// adding a value
student.lastName = 'Miller';

// console.log(student.lastName);
// console.log(student);

// use brackets instead of dot notation
// if you wanna use a variable to access 


const input = 'firstName';

// console.log(student.age);


// console.log(student.age);
// console.log(student.hobbies[0]);

// deleting a property
// delete student.age;

// check if a property exists 
// prop in object
// console.log('firstName' in student);

// console.log(student);

// looping through the object
for (const el in student) {
    // console.log(el);
    // console.log(student[el]);
}

// console.log(Object.keys(student));
// console.log(Object.values(student));


const persons = [
    {
        name: 'mary',
        age: 23
    },
    {
        name: 'bob',
        age: 32,
    },
    {
        name: 'alice',
        age: 27
    }
];

for (let person of persons) {
    console.log(person.name);
}