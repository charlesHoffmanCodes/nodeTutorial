const secret = 'SUPER SECRET';
const john = 'john';
const peter = 'peter';

console.log(module);

//See exports property of module object!
//Any variable / function we add to the exports object of a module (file) will be visible in the entire application!
//Everything else is by default NOT VISIBLE/ ACCESSIBLE to other modules in the app!

//ADDING TO EXPORT OBJECT
//A way to set the exports object to contain variables john and peter!
module.exports = {john, peter}; 