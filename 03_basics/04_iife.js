// Immediately invoked function expression (IIFE)
// We face problem due to pollution of global scope variables/declaration
// to remove this global scope pollution we use FE
(function chai(){
    console.log(`DB CONNECTED`);
    
})();


( function arrow()  {
    console.log(`DB CONNECTED in arrow`);
    
})();

( () => {
    console.log(`Arrow function`);
    }
)();

( (name) => {
    console.log(`Arrow function ${name}`);
    }
)('Pratik');


