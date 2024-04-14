"use strict";
// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
const person = {
    name: "Zohaib",
    getName: function () {
        return this.name;
    },
};
console.log(person.getName());
console.log("\n");
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea());
console.log("\n");
// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
const myObject = {
    property: "value",
    outerMethod: function () {
        console.log(this.property);
        const innerMethod = () => {
            console.log(this.property);
        };
        innerMethod();
    },
};
myObject.outerMethod();
