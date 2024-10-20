class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email.toUpperCase()}`
    }

    set email(value){
        this._email = value;    //We never return setters
    }

    get password(){
        return `${this._password}pratik`
    }

    set password(value){
        this._password = value;
    }
}

const pratik = new User("p@fb.com", "abc")
console.log(pratik.password);
console.log(pratik.email);
