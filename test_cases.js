import { getStudentsAPI, addStudentsAPI } from "./api.js";

console.log("EXERCISE 1 \n");

console.log("Test Case 1");
console.log("Initial DB State: ");

addStudentsAPI({
  firstName: "Jamel",
  lastName: "Hadjirasul",
  email: "jamel@email.com",
});

addStudentsAPI({
  firstName: "Karl",
  lastName: "Gaitera",
  email: "karl@email.com",
});

console.log(getStudentsAPI());




console.log("\n\nTest Case 2");

const newUser = addStudentsAPI({
  firstName: "Darryle",
  lastName: "Largoza",
  email: "darryle@email.com",
});

console.log("Return Saved Object: ");
console.log(newUser);




console.log("\n\nTest Case 3");

console.log("Updated DB State: ");
console.log(getStudentsAPI());
