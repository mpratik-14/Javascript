function sayMyName (){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("K");
    
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
    
// }


function addTwoNumbers(num1, num2) {
    return (num1 + num2);
    
}
// const sum = addTwoNumbers(1,2)
// console.log(sum);

function loginUserMsg(userName){
    if(userName === undefined){
        console.log("Please enter username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMsg());

function calculateCartPrice(val1, val2,...num1) { //rest/spread operator
    return num1
}

// console.log(calculateCartPrice(200,300,400,500));

const user = {
    username : "pratik",
    price : 199
}

// ``
function handlebject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// console.log(handlebject(user));
handlebject({
    username: "pratik",
    price: 100
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
