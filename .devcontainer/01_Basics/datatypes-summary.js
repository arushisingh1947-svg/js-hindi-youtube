// datatypes  kis tarah se data ko memory mei rakhte h aur access karte h us basis pe there are two types
// two types of data types are there

//primitive datatypes 7 types of dta are there (primitive data types are call by value wea re given a copy in which we make changes and changes are made in copy)
// number, boolean,BigInt, string,null undefined , symbol

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id =Symbol('123')
 const  anotherId = Symbol('123')
  
 console.log(id == anotherId);
// const bigNumber = 3456789009887557n

// non primitive or reference  (inki sab ki jo non primitive hai un sab ki mainly return value object hi aati h)
// Array, functions, objects

const heros = ["shaktiman" , "naagraj","doga"]
let myObj = {
    name: "Arushi",
    age:  22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof outsideTemp);
console.log(typeof scoreValue);