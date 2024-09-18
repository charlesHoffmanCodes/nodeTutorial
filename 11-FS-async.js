//Asynchronous File system methods - use call back functions! 

//CALL BACK FUNCTIONS ARE REALLY COOL! and I believe that I understand them!
//Handle asynchronous code preventing unexpected errors!
//Big idea - we cant simply call read1 async, read2 async and then write
//Theres the possibility that as read1 and read2 are waiting for IO, the CPU is allocated to write, and then write proceeds when the information
//That needs to be written hasnt yet been extracted!  (that is read 1 and read 2 have not returned)
//SO - we have call back functions, which are called only when a function exits
//We can thus call each next operation in the previous operations call back, ensuring the previous operation is done before the next one beings!

const {readFile, writeFile} = require('fs');

//Asynchronous read file function with call back function COMPLICATED ASS NESTED CALL BACK FUNCTIONS!!! but it kind of makes sense overall...
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return 
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {    //Nested call backs here!
        if (err) {
            console.log(err);
            return 
        }  
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });    

    })
});

