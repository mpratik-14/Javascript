// let myName = "Pratik     "
// console.log(myName.length);
// console.log(myName.trueLength);

let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "sling",

    getSpiderPower: function(){
        console.log(`"SPidy power is ${this.Spiderman}`);
    }
}

Object.prototype.pratik = function(){
    console.log(`Pratik is present in all objects`);
    
}

// heroPower.pratik()
// myHeros.pratik()

Array.prototype.heyPratik = function(){
    console.log(`Pratik says hello`);
    
}

// myHeros.heyPratik()
// heroPower.heyPratik()

//Inheritance

const user = {
    name : "chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "Pratik      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
    
}

anotherUserName.trueLength()

"pratik".trueLength()
"op".trueLength()