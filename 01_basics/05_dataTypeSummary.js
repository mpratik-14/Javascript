//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non - Primitive)
/*
stack - variable declared - you get a copy
headp - declared - you get a reference, so if changed anything -> original value is changed
*/
let myYtName = "dkode"
let stack = myYtName

stack = "name change"
console.log(stack);
console.log(myYtName);

let obj1 = {
    id : 1,
    name : "pratik"
}

let heap = obj1

heap.name = "name change"

console.log(obj1);
console.log(heap);


