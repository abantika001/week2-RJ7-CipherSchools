let obj1 = { name: "Abantika", age: 24 };
let obj2 = { name: "Chandra" };
function areEqual(obj1, obj2) {
if (obj1 == obj2) {
    console.log(true);
}
if (Object.keys(obj1).length != Object.keys(obj2).length){
    return false;
}
for (let key of Object.keys(obj1)) {
    if (obj2[key] == "undefined") {
        return false;
    }
    if (obj2[key] !== obj1[key]) {
        return false;
    }
}
return true;
}
console.log(areEqual(obj1, obj2));