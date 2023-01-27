// let object = {
    // name: "John",
    // age: 24,
    // city: "New York",
// };

// // let object2 = { ...object, country: "USA", favouriteSong: "Shape of You"};
// console.log(object2);


let object = {
    name: "John",
    age: 24,
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
    },
};
// let object2 = { ...object };
// object2.address.city = "Newark";
// console.log(object);
// console.log(object2);


let object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Newark";
console.log(object);