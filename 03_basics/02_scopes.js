var c = 300
const b = 200
let a = 300

// if(true){
//     a = 10  //wont print outside block
//     const b = 20    //wont print outside block
//     c = 30

//     console.log("inside block :" + a);
//     console.log("inside block :" + b);
//     console.log("inside block :" + c);
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username =  "Pratik"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    // two()
    
}
// one()

// if(true){
//     const username = "Pratik"
//     if(username === "Pratik"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
    
// }

// console.log(username);

/////// ++++++++++ interesting ++++++++++

console.log(addone(5));
console.log(addTwo(5));

function addone(num){
    return num + 1;
}


const addTwo = function(num){ //function assigned to varible so can only be called after declaration
    return num + 2;
}

// console.log(addTwo(5));

