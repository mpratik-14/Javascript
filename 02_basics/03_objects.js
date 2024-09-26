//singleton
// Object.create


//object literals
const mySymbol = Symbol("key1")


const jsUser = {
    name: "Pratik",
    "full name": "Pratik Mhatre",
    [mySymbol] : "myKey1", //only way to refer symbol is using []
    age:20,
    location:"Mumbai",
    email: "pdm@gmail.com",
    isLoggedIn : false,
    lastLoginDetails: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(`${jsUser[mySymbol]} datatype is ${typeof(jsUser.mySymbol)}`);

jsUser.email = "p@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "test@gmail.com"
// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo("Pratik"));






