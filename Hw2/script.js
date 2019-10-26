'use strict'
let userInput;
const numbers = [];
let total = 0;
do{
    userInput = prompt("Enter numbers ...");
    numbers.push(userInput);
} while(userInput !== null);
console.log(numbers);
if(userInput === null){
    for(let i = 0;i < numbers.length; i++){
    total += Number(numbers[i])
    }
}
console.log(`Общая сумма чисел равна ${total}`);