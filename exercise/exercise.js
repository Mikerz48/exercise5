const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

//The person 1 first name modify too because person2 is pointing on
// the same direction of person1, so they are the "same" object, so 
// if i modify the person2 values, the person1's values modify too,
// because they refer to the same object in memory.

console.log(person1);
console.log(person2);
