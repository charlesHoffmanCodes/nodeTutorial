//npm - global command, comes with node
// npm --version  - gets you current version of npm

//LOCAL dependency - use package only in this particular projects
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename> 
// sudo npm install -g <packagename>  (THIS IS WHAT U USE ON MAC!)

// package.json - manifest file (stores important info about our project) (THIS IS something that we have to create outlining info about our project!)
// manual approach (create package.json in the root directory, create properties etc..)
// npm init (method that step by step asks you questions to initialize your json)
// npm init -y (sets json to everything default!)

//Example of using / importing methods from the lodash module (USING NPM)
const _ = require('lodash');

console.log(_); //Extracting exports object of lodash module

//Example of using a lodash method
const items = [1, [2, [3, [4]] ]];
const newItems = _.flattenDeep(items);
console.log(newItems);





