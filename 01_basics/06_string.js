const name = "pratik"
const count = 14

console.log(`My name is ${name} and my date is ${count}`);

const gameName = new String('Pratik')

console.log(gameName[0]);
console.log(gameName.indexOf('t'));
console.log(gameName.charAt(2));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));