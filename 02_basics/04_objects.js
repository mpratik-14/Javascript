// const tinder = new Object() //singleton object
const tinder = {}    //non singleton object

tinder.id = "123abc"
tinder.name = "Pratik"
tinder.isLoggedIn = false

// console.log(tinder);

const regularUser = {
    email : "p@gmail.com",
    fullname : {
        userFullName:{
            firstName: "Pratik",
            lastName: "Mhatre"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Pratik"
}

//Destructuring
const {courseInstructor : ci} = course
console.log(ci);



