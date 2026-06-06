//Arrays
  const myArray = [0,1,2,5,7]

  const myHeros = ["Harrypotter", "Hermionee"]

  const myArr2 = new Array(1,2,3,4)
 // console.log(myArray[3]);

  // array methods 

  //myArray.push(9)
 // myArray.pop()
//myArray.unshift(8)
// it means the value is inserted at first position in the array when we use this 
//myArray.shift()
  //console.log(myArray);
 // console.log(myArray.includes(9));
 //  console.log(myArray);

// const newArray = myArray.join()

 //console.log(myArray);
 //console.log( newArray);
 //the one with newArray has been converted to string we can check it by using typeof operator
 
 //console.log(typeof  newArray );

 // slice,splice

 console.log("A" , myArray);

 const myn1 = myArray.slice(1, 3)

 console.log(myn1);
 console.log("8",myArray);

 const myn2 = myArray.splice(1,3)
 console.log("c", myArray);
 console.log(myn2);
// slice contains the value included wheras when we print splice it contain the value that is not included for example in slice if we are printing slice from 0to 3 then only 0 1 and 2 value will be written wheras rest of the value will be printed in splicing
 