class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("Pratik", "p@gmail.com", "123")

chai.addCourse()

console.log(chai);

const tea = new User("Pratik")
// tea.addCourse()  --no access to sub class
console.log(tea);

console.log(chai instanceof User);
