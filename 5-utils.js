//Cool - in JS function can be assigned to a variable kind of, interesting alternative syntax for function definition
const sayHi = (name) =>{
    console.log(`hello there ${name}`);
}

module.exports = sayHi;
//In this case I don't wrap the exports with an object, because were only exporting one item (one variable and value)