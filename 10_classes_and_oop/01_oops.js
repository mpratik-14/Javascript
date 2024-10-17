//Object literal

// const user = {
//     userName : "Pratik",
//     logInCount : 8,
//     signedIn : true,

//     getUserDetails : function(){
//         // console.log("got user details from DB");
//         // console.log(`Username: ${this.userName}`);
//         // console.log(this);
        
        
//     }
// }

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function

function User(userName, logInCount, isLoggedIn){
    this.userName = userName;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
        
    }
    return this
}

const userOne = new User("Pratik", 12, true)
const userTwo= new User("Mhatre", 14, false)

console.log(userOne);
console.log(userTwo);

console.log(userOne.greeting());



