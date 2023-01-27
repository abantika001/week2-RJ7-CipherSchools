//Rest and Array Operator are applicable in Arrays and Objects in JS

// let array = [5, 10, 15, 20, 25];

//Spread Operator -> ...
//let newArray = [...arra
// console.log(...array);
// console.log(array);


//Rest Operator -> ...
let maxOfNumbers = (...numbers) => {
    let maximum = Number.MIN_VALUE;
    for(let number of numbers){
        maximum = Math.max(maximum, number);
    }
    return maximum;
};
console.log(maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));