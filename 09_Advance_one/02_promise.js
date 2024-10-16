// const promiseOne = new Promise(function(resolve, reject){
//     //Do async task
//     //Db calls, cryptography, network

//     setTimeout(function(){
//         console.log('Aysnc task is complete');
//         resolve() //resolve will connect with .then()
//     }, 1000);
// })

// // then is directly connected to resolve
// promiseOne.then(function(){
//     console.log("Promise consumed");

// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");

// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "pratik", email: "pratik@test.com"
//         })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);

// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "pratik", pass: "123"});
//         }else{
//             reject('Error: something went wrong');
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username  
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("the promise is either resolved or rejected")
// )

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: "javascript", pass: "123" })
//         } else {
//             reject('Error: JS gone wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
        
//     }
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/mpratik-14')
.then((response) => {
    return response.json()
})
.then((data) => {yt
    console.log(data);
    
})
.catch((error) => console.log(error))