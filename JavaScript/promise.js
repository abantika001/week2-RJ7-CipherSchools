// // Promise is a class in JS
// // constructor (function)


// let myPromise = new Promise((fulfilled, notFulfilled) => {
//     let num1 = 10;
//     let num2 = 15;
//     let sum = num1 + num2;
//     if(sum > 24) {
//         fulfilled();
//     } else {
//         notFulfilled();
//     }
// });

// myPromise.then(() => {
//     console.log("Promise was fulfilled");
// })
// .catch(() => {
//     console.log("Promise was not fulfilled");
// });


// function addTwoNumbers(num1, num2) {
//     let sum = 0;
//     setTimeout(() => {
//         console.log(num1 + num2);
//         sum = num1 + num2; 
//     }, 5000);
//     console.log("Inside addTwoNumbers");
//     return sum;
// }

// console.log(addTwoNumbers(2, 3));


// function addTwoNumbers(num1, num2) {
//     let myPromise = new Promise((fulfilled, notFulfilled) => {
//     setTimeout(() => {
//         console.log("Inside setTimeout");
//         fulfilled(num1 + num2);
//     }, 5000);
//     notFulfilled (new Error ("An error occured!"));
//     });
// }

    
// addTwoNumbers(10, 5)
// .then(() => {
//     console.log("Promise was fulfilled");
// })
// .catch(() => {
//     console.log("Promise was not fulfilled");
// });




let addNumbers = (...args) => {
    let sum = 0;
    for (let el of args) {
        sum = el;
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sum);
        }, 3000);
    });
};

// let testfunction = () => {
//     addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.assertlog(err);
//     });
// };


let testfunction = async () => {
    try {
        let sum = await addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        console.log(sum);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Finally");
    }
};

testfunction();