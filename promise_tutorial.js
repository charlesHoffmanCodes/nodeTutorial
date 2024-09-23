

//NOTE - creating a new promise
//Promise = wrapper object for some asynchronous function
// Executor code is the function that is wrapped by the promise
// resolve and reject are functions of the promise class that are pre-defined in JS
//Initial state of promise object is pending
// resolve - updates state of promise object to fulfilled and sets result to argument
// reject - updates state of promise object to rejected and sets result to argument
// Executor code runs as soon as promise is created!
// then - takes two arguments (functions or further promises), which run when either resolve or reject is called on the promise (IE when promise is done!)


//Creating a new promise object!
const prom1 = new Promise( (resolve, reject) => {
    setTimeout( () => {console.log("Promise 1 Done!");}, 2000);
    let result = 1 + 1;
    
    if (result === 2) {
        resolve(result);
    }
    else {
        reject(new Error('Problem!'));
    }  
});

//Then sets two listeners functions/promises to the specified promise
//The first argument - runs if promise is fulfilled
//The second argument - runs if promise is rejected

prom1.then( 
    (result) => { console.log(result + " <- this is our result ")},
    (error) => { console.log(error)}
);


//Overall this is not a great example of how promises work lol 


