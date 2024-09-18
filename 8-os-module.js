//OVERVIEW of Built-in OS module and some common methods

//get built-in os module export object
const os = require('os');

// info about current user 
const user = os.userInfo();  //Example of calling a method from the os export object, os.name gets the key value pair (which is a function in this case)
console.log(user);
//OS method - returns system uptime in seconds
console.log(`The System uptime is ${os.uptime()}`);

//OS methods - get OS information
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemMem: os.freemem(),
}
console.log(currentOS);