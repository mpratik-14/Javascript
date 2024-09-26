const user = {
    userName : "Pratik",
    price : 999,

    welcomeMessage : function(){
        //whenever to refer current context/scope use this. 
        // this refers to current context
        console.log(`${this.userName}, welcome to website`);
        
        console.log(this);

    }
}

// user.welcomeMessage()
// user.userName = "Mhatre"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let userName = "Pratik"
//     console.log(this.userName); //this wont print cuz this works only inside objects
// }
// chai()

// const chai = function(){
//     let userName = "Pratik"
//     console.log(this.userName); //this wont print cuz this works only inside objects
// }
// chai()

// const chai = () => { //arrow function
//     let userName = "Pratik"
//     console.log(this.userName); //this wont print cuz this works only inside objects
// }
// chai()

// const chai = () => { //arrow function
//     let userName = "Pratik"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) //no return need for parenthesis
// console.log(addTwo(1,3));

const returnObj = (num1, num2) => ({userName: "Pratik"})
console.log(returnObj(1,3));

const myArray = [1,2,3,4,5]
myArray.forEach()