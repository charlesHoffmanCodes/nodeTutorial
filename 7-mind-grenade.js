//WHAT IS THIS? 
// - basically - the idea is that when you require a module, if that module is calling functions, you call those functions!



const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is  : ${num1 + num2}`);
}

addValues();