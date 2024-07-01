const a = 10;
const b = 100;
//Basic operations to only find out it can store positive negavtive decimal etc
console.log(a + b); //110
console.log(a - b); //-90
console.log(a / b); //0.1
console.log(b / a); //10
console.table([a + b, a - b, a / b, b / a]);

// String operations
console.log("100" + "100"); // only addition will result in concatination rest will work fine
console.log("100" * "100");
console.log(100 - "100");
console.log("100" / 100);

const c = 10.9789;
const d = 10.23456;
console.log(Math.round(c), Math.round(d)); // round off
console.log(Math.floor(c), Math.floor(d)); // round to lower end
console.log(Math.ceil(c), Math.ceil(d)); // round to upper end
console.log(Math.random()); // generate randome number between 0 to 1

const chocolate = 20;
const kids = 6;
console.log(
  `Equal chocolate distributed among kids are ${Math.floor(chocolate / kids)}`
);
console.log(`Chocolate left for parents are ${chocolate % kids}`); // modulo operator.
console.log(`Power Operator :${10 ** 10}`);
console.log(-(1000 ** 200)); // returns infinity -infinity

console.log("dog" / 2); // retruns NaN
console.log(typeof NaN); // return number (exception)
