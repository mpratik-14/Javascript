/*
js arrays are resizable
js array create shallow copies
shallow copies - is a copy that share the same reference
deep copy - is a copy whose properties do not share the same reference(change in the copy obj doesnt mean the actual obj will change)
*/
const myArr = [0,1,2,3,4,5]
const myHeros = ["pot", "bot"]

let arr = [1,2,3,3]
var arr1 = [1,2,3,4]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);

//Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //Add element to beginning of array
// myArr.shift(9) //remove element from beginning of array
// console.log(myArr);

const sl = myArr.slice(1,3); //does not conside upper bound, og array remains same
console.log(myArr);
console.log(sl);


const spl = myArr.splice(1,3); //contains upper bound,og array values are removed
console.log(myArr);
console.log(spl);

