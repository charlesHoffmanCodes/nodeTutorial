//Modules - Encapsulated code (only share the minimum of code)
// EVERY FILE in node is a module! 

//IMPORTANT SUMMARY! 
//Jist of it - modules can be used to control what parts of a file (or module) in an app are visible to other modules
// This is done by setting the exports object of a module with the varaibles that you want visible in other modules
//Then, within another module, we can extract the export object of a specified module, allowing us access to those variables! 


//GETTING variables / functions from other modules in the app
const names = require('./4-names'); //names is now the export object of the 4-names.js module!

const sayHi  = require('./5-utils');  //NOTICE extension js is left out!

const data = require('./6-alternative-flavour');


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);