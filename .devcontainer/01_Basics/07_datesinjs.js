// Dates

let myDate = new Date()
//console.log(myDate);
// after running this program the date came but it is not readable
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0 ,23)
//console.log( myCreatedDate. toDateString());
// in javascript months start from 0
let myCreatedDate = new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(myCreatedDate.getTime());
//console.log(Date.now());
// date.now will give ans in milisec only to convert it into sec  we will divide it by 1000 or we can use math.floor
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    

}) 