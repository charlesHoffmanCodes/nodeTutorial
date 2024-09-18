//OVERVIEW of built in path module

//Extract export object from path module (gets you access to all the path methods!!)
const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/', '/subfolder/', 'test.txt'); //Takes inputs and merges them into a valid path name! (REMOVES EXCESS / for example)
console.log(filePath);

const base = path.basename(filePath); //Returns the last portion (base) of a path
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); //once again used to resolve several segments of a path together! 
console.log(absolute);
console.log(__dirname);