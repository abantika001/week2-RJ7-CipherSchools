// function addTwoNumbers(num1, num2) {
    // return num1 + num2;
// }


// let addTwoNumbers = (num1, num2) => {
    // return num1 + num2;
// };
// console.log(addTwoNumbers(1,2));

// let addTwoNumbers = (num1, num2) => num1 + num2;
// console.log(addTwoNumbers(1,2));


let addTwoNumbers = (num1, num2 = 5) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
};
//console.log(addTwoNumbers(1,2));
console.log(addTwoNumbers(1));
