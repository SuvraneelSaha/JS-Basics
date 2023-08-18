const interestRate = 9;
// interestRate = 11;
// a constant cannot be reassigned 
console.log(interestRate);

// Primtives types
/*
String 
Number 
Boolean 
undefined - it is also a type and also a value 
null 
*/

let name ='Mosh'; // String Literal

let age = 30; // a Number Literal

let isApproved = true; // A Boolean Literal

let firstName; // if we dont initialize it the default value is undefined 

let lastName = null; // null when we want to clear the value of the variables 

// in Js there is no float and double 

/*
in case of typeof lastname - it gives out object 
*/

// Reference types 
/*
Object 
Array 
Function 
*/



let person={
  name1:"NiggaChan",
  age:31
};

console.log(person);

// Dot Notation for changing or editing the properties inside of an object 

person.name1 = "Nigga";

console.log(person.name1);

// Bracket Notation for changing or editing the properties inside of an object 

person["age"] = 30;
console.log(person.age);

//let selectedColors = []; // empty array 

let selectedColors = ["red" , "blue"];

console.log(selectedColors);

console.log(selectedColors[1]);

selectedColors[2] ="green";
selectedColors[3] =1;

console.log(selectedColors);

// objects in the array and the size of the array both are dynamic in nature 

// technically an array is an object 

// type of the array is an OBJECT 
// so Array is an OBJECT 

console.log(selectedColors.length);
// no. of items in an array 

// performing a task 
function greet(name,lastName) // parameter is in the function whereas the arguments is in the function call 
{
  // body of the function 
  // scope of the function 
  console.log("Hello "+name+" "+lastName);
}

greet("JOHN",31); // argument - john 

greet("Aggin",32);

// a function can have multiple parameters  

// Types of Function 

// Calculates a value

function square(number)
{
  return number*number;
}
// returns a value to initialize a variable 
let number = square(4);
console.log(number);

console.log(square(6));

/*
congratulations on your completion of learning basics of javascript 
you learnt through struggling and your struggle helped you to develop  a growth in you 
also in your learning and also your brain power so keep on doing it 
You can achive so more to come , Struggle fail persevere and GROWWWWWWWWWWw. 


*/
