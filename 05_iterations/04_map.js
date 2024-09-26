const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     console.log(`${key}: shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"]

/*
for in loop will give the keys
for of loop will give the values directly
*/
for (const key in programming) { 
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) { //this wont work
    console.log(key);
}

for (const key of map) {
    console.log(key);
}