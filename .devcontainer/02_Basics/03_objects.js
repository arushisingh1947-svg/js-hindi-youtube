// singleton
//when we declare with the help of literals then no singleton
// but when with constructor always singleton

// object literals

//we can also create object using object.create which is called constructor 

const mySym = Symbol("key1")
const jsUser = {
    name : "Arushi",
    [mySym]: "myKey1", // WHEN WE HAVE TO REFE RTHE SYMBOL WE USE SQUARE BRACKET
    "full name" : "Arushi Singh",
    age: 18,
    location: "jaipur",
    email: "arushisingh1947@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}
// objects can be accessed using this way as shown below
console.log(jsUser.email)
//the above method is used for accessing the object but it is not appropriate
 console.log(jsUser["email"])
 console.log(jsUser["full name"])
 console.log(typeof jsUser[mySym])
 jsUser.email =  "arushi@chatgpt.com"
 //Object.freeze(jsUser) // THIS HAS BEEN USED TO MAKE THE EMAILID USED ABOVE FREEZE AFTER THIS STEP IT WILLNOT CHANGE
 jsUser.email = "Arnav@microsoft.com"
 //console.log(jsUser);
 
 jsUser.greeting = function(){
    console.log("Hello js user");

 }
 jsUser.greetingTwo = function(){
    console.log('Hello js user, ${this.name}')
 }
  console.log(jsUser.greeting());
  console.log(jsUser.greetingTwo());
  // double quotation means string single quotation means baticks also called as string interpolation