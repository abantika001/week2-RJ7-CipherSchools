let details = {
    name: "Alex",
    age: 24,
    address: {
        street: "Brooklyn",
        city: "New-York",
        state: "NY",
        country: "USA",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
};
// let passportNumber = details.address.passportDetails.passportNumber;
// console.log(passportNumber);

//let myName = details.name;
//let age = details.age;

let { name: myName, age } = details;
console.log(myName, age);