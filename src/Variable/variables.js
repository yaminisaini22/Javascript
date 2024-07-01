const customerId = 2202;
let customerName = "yamini";
var accountInfo = "BRB01";
//not to use var under block scope and functional scope.
city = "Delhi"; //not a good practice to do so
//customerId = 2; cannot be done as const value cannot be overwrittern.
console.log(city);
console.log(customerId);
console.log(customerName);
console.log(accountInfo);
/*
instead of so many console.logs we can use console.table
*/
console.table([city, customerId, customerName, accountInfo]);
