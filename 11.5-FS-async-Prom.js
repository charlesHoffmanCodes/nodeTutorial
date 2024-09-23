//IDEA - using promises and async await to avoid callback hell!
//Much cleaner way to write the asyncrhonous code that was done with callbacks!

//THIS IS PRETTY CRAZY - use of promises with async await and promisify to COMPLETELY AVOID CALLBACK HELL!


//Async readFile

//Promisify function! 

const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//IMPORTANT NOTE
// CAN avoid using promisify by calling require.('fs).promises (which automatically returns the promise returning version )


const start = async() => {
    //NOTE - just wrapping getText in a error catch, because this method doesnt handle promise errors...

    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');  //NOTICE - no callback argument, since function promisified! 
        const second = await readFilePromise('./content/second.txt', 'utf8'); //NOTICE - no callback argument
        await writeFilePromise('./content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second} `);
        //REALLY NICE - because of the await syntax, and this line being below, it cant run until the first read is done (really clean asynchrnonous management!)
        console.log(first, second);
    }
    catch (error) {
        console.log(error);
    }
    //call get Text, read first file wrapped in promise! Awaiting the completion of this promise object, result is retunred
    //Above is just a fancier way of getting the promise result then using then
    // Code of this start function will stop running until getText finishes, so its almost like all the lines below are in a function that is then for getText
}

start();


//Previous method to make readFile call wrapped in a promise - attempted to avoid callBack hell without using async await
/*
const getText = (path) =>  {
    return new Promise((resolve, reject) => {
        readFile(path ,'utf8', (err, data) => {
            if (err) {
                reject(error);
            }
            else {
                resolve(data);
            }
        }); 
    })
}
    */

