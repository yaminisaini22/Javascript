//number
let a = 33;
console.log(typeof a);
// conversion we use Capital letter for eg: Number instaed of number
let string = String(a);
console.log("when number is converted into string:",string, typeof (string))
let booleanvalue = Boolean(a)
console.log("when a number is converted into boolean value",booleanvalue, typeof(nullvalue))
//string
let b = "abc"
console.log(typeof b)
let number = Number(b); // but we can see it is not a number
console.log("when string is converted into number",number, typeof(number));
let booleanstring = Boolean(b);
console.log("when string is converted into boolean", booleanstring, typeof(stringnull))
//null
let c = null
console.log(typeof null);
let string2 = String(c);
console.log("when null is converted into string",string2, typeof(string))
let number2 = Number(c)
console.log("when null is converted into number",number2, typeof(number2))
let booleannull = Boolean(c)
console.log("when null is converted into boolean", booleannull, typeof booleannull)

//boolean
let d = true;
console.log(typeof d);
let booleannum = Number(d)
console.log("When a boolean is converted into number",booleannum, typeof booleannull);
let booleansstring = String(d);
console.log("when a boolean is converted into string",booleansstring, typeof booleansstring)


//excepetion cases

let e = "asb33";
let exception = Number(e)
console.log("when stringnumber is converted into number ", exception , typeof exception);

let f = "";
let exception2 = Boolean(f)
console.log("when empty string is converted into boolean value",exception2 , typeof exception2);