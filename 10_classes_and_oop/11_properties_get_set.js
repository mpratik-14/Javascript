function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email = email.toUpperCase();
        },
        set: function(value){
            return this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password = password.toUpperCase();
        },
        set: function(value){
            return this._password = value;
        }
    })
}

const chai = new User("chai@coffed.com", "coffee")
console.log(chai.email);
console.log(chai.password);
