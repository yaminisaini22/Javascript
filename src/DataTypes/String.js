/*STRING
Double quotes
single quotes
backtick
*/
/* eslint-disable */
//so that we can use single quotes
const Salutation = "Ms.";
const firstName = "Yamini";
const lastName = `Saini`;
console.log(`my salutation is ${Salutation}`); //use of backticks
console.log("my first name is ", firstName);
console.log("my last name is ", lastName);

//concatination: joins the strings

const fullname = Salutation + firstName + lastName;
console.log("my full name is ", firstName, lastName);

// Interpolation: put variable inside the string
const greeting =
  "Hello my name is " +
  firstName +
  " " +
  lastName +
  "." +
  " " +
  "Nice to Meet you";
console.log(greeting);
// Interpolation doesn't look nice to me let's use backticks

const greeting1 = `hello my name is ${firstName} ${lastName}. Nice to meet you.`; // much readle
console.log(greeting1);
//Putting strings on multiple lines using backticks

const song = `
oooooo
saaajnnaaa
mere
ishq
hoke
....


....
`;
console.log(
  "here is a soong which maintains the lines provided in the code using backticks",
  song
);
// "+" it is used for concat but also used for as operator


console.log(1 + 1, "additiom");
console.log("1" + 1, "string"); // first is string 
console.log("1" + "1", "string");
console.log(1 + "1","number then string = string");
console.log(2+2+"2");
console.log("2"+2+2);
