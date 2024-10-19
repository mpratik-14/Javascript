function SetUsername(userName){
    //complex DB calls
    this.userName = userName
}

function createUser(userName, email, password){
    
    SetUsername.call(this, userName)

    this.email = email;
    this.password = password;
}

const chai = new createUser("Pratik", "p@fb.com", "123")

console.log(chai);
