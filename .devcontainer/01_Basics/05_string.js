const name = "Arushi"
const repocount = 50
//console.log(repocount + name);   it is good method but not for modern time  for day to day use  we use backtics
  
console.log(`Hello my name is ${name} and my repo count is ${ repocount}`);

const gameName = new String('Arushi')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('s'));
const newString =  gameName.substring(0,3)
console.log(newString);

const anotherString =  gameName.slice(-6,3)
console.log(anotherString);

const newStringOne = "  Arnav  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%29choudhary"
console.log(url.replace('%29' , '-'))