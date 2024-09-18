const {readFilySync, writeFileSync} = require('fs');  //Object destructuring, extracts both of these methods... NOT EXACTLY SURE ABOUT THIS SYNTAX

//Synchronous methods to read files!
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

//Synchrnous methods to write files
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`);