//.map function

// let array = [1,2,3,4,5];
// let newArray = [];
// for(let i=0; i<array.length; i++){
    // newArray[i] = array[i]*array[i];
// }
// console.log(newArray);


// In JS, a function is also a JS Object.

// let array = [5,10,15,20];
// function functionForMap(element) {
    // return element * element;
// }
// let newArray = array.map(functionForMap);
// console.log(newArray);

// let addTwoNumbers = (a, b) => a + b;
// addTwoNumbers(4, 5);


let array = [5,10,15,20];
let newArray = array.map((element, index) => element * element);
console.log(newArray);