// let array = [50, 40, 30, 20, 10, 111];
// let sortedArray = array.sort();
// console.log(sortedArray);


// Using comparator function
let array = [50, 40, 30, 20, 10, 111];
let sortedArray = array.sort((el1, el2) => {
    el1 = Number(el1);
    el2 = Number(el2);
    return el1 - el2;
});
console.log(sortedArray);