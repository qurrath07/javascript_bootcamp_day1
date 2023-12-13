/*////////***********
//*********************************
//*******************DAY 1****************** 

console.log('app.js is connected ')
//var 
//data types
//arrays & objects
// win prediction game

//var 
// its keyword to declare variables
//es5 ecma script 5 of js 
// new keywords - var, let const (avoid var)
// var - containers 
let email = 'qua@gmail.com'
email= 'qua@yahoo.com' // updating value
console.log(email)


//data types - string , num, boolean , arrays n objects
let username='qurrath'
let age = 20
//string -> '',""
// semi colon is optional 
// decimals are also number
console.log( typeof username)
console.log( typeof age)
//array 
let items =['milk','oats','butter']
console.log(items)
// index used - read , update , delete values
console.log(items[0])
//push pop
items.push('tea')
items.push('peas')
items.pop()
console.log(items)
//splice(indx value, delete count,add_new_value(optional))
items.splice(1,1,'oats_maida','coffee')
items.splice(1,0,'corn','strawberry')// no deleting just adding
console.log(items)

//objects
let user1=['qurrath','qua@gmail.com',90890,20,2]
//or
let user2={
    name :'qurrath',
    address:'blore',
    age:20,
    phno: 9099,
    hobbies: ['cooking','reading','poetry']
}
console.log(user2)
console.log(user2.name)
user2.name='qurrath ul aien'
console.log(user2.name)
user2.pin=560039
delete user2.address
console.log(user2)
console.log(user2.hobbies[0])


//using multiple users in obj
let user3=[{name:'qua',mail:'qua@gmail.com',age:20},
{name:'aa',mail:'aa@gmail.com',age:21},
{name:'bb',mail:'bb@gmail.com',age:22},
{name:'cc',mail:'cc@gmail.com',age:23},
{name:'dd',mail:'dd@gmail.com',age:23},
{name:'ee',mail:'ee@gmail.com',age:25},
{name:'ff',mail:'qff@gmail.com',age:26},
]
console.log(user3)
console.log(user3[0].name)

let random=Math.floor(Math.random()*user3.length)
console.log(random)
console.log(user3[random].name)
*/
////////***********
//*********************************



/*******************DAY 1 Assignment-1****************** */ 
// 1. Create an empty array called "fruits".
let fruits = [];

// 2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".
fruits.push("apple", "banana", "orange");

// 3. Remove the first fruit from the array.
fruits.splice(0,1);

// 4. Add "grape" to the end of the array.
fruits.push("grape");

// 5. Update the second fruit in the array to "pear".
fruits[1] = "pear";

// 6. Print the final "fruits" array after performing the above operations.
console.log(fruits);



/*******************DAY 1 Assignment-2****************** */ 
// 1. Create an empty object called "person".
let person = {};

// 2. Add the following properties to the "person" object:
//    - name: "John"
//    - age: 30
//    - city: "New York"
person.name = "John";
person.age = 30;
person.city = "New York";

// 3. Remove the "age" property from the "person" object.
delete person.age;

// 4. Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Engineer";

// 5. Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco";

// 6. Print the final "person" object after performing the above operations.
console.log(person);




/*******************DAY 1 Assignment-3****************** */ 
// 1. Create an empty array called "cars".
let cars = [];

// 2. Add three car objects to the "cars" array.
cars.push(
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Toyota", model: "Camry", year: 2018 }
);

// 3. Remove the first car object from the "cars" array.
cars.splice(0,1);

// 4. Add a new car object to the "cars" array.
cars.push({ make: "Honda", model: "Civic", year: 2020 });

// 5. Update the "model" property of the second car object in the array to "Accord".

if (cars.length >= 2) {
  cars[1].model = "Accord";
}

// 6. Print the final "cars" array after performing the above operations.
console.log(cars);



























