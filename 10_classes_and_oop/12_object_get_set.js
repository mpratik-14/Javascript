const User = {
    _email : "p@gmail.com",
    _password : "abc",

    get email(){
        console.log(`get called`);
        
        return `${this._email.toUpperCase()}`;
    },

    set email(value){
        this._email = value
        console.log(`set called`);
    }
}

const chai = Object.create(User);

chai.email = "new@gmail.com"
console.log(chai.email);
