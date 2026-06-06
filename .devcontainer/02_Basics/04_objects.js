//const tinderUser = new Object()
 const tinderUser = {}

 //console.log(tinderUser);
  tinderUser.id = "123abc"
  tinderUser.name = "sammy"
  tinderUser.isLoggedIn = false

  
  //console.log(tinderUser)
  const regularUser = {
    email: "arushi@gmail.com",
    fullname:{
        userFullname:{
            firstname: "Arushi" ,
            lastname: "singh"
        }
    }
  }
 // console.log(regularUser.Fullname.userFullname.lastname);

  const obj1 = {1: "a" , 2 : "b"}
  const obj2 = {3: "a" , 4 : "b"}
  const obj4 = {5: "a" , 6 : "b"}

  // const obj3 = { obj1 , obj2}


  
  //const obj3 = Object.assign({}, obj1, obj2 , obj4)
  const obj3 = {...obj1, ...obj2}
  //console.log(obj3);

  const users = [
    {
        id: 1,
        email: "h@gmail.com"

    },
    {
        id: 2,
        email: "arnav@12"
    },
  ]

  users[1].email
  //console.log(tinderUser);
  //console.log(Object.keys(tinderUser));
  //console.log(Object.values(tinderUser));
  //console.log(Object.entries(tinderUser)); 

  //console.log(tinderUser.hasOwnProperty('isLoggedIn'));

  const course = {
     coursename:"js in hindi",
     price: "999" ,
     courseInstructor: "Arushi"

  }

     // course.courseInstructor (( for every time accesing this value we have to type the same thing again and again so there is another synatx for that))
    const {courseInstructor} = course
    console.log(courseInstructor);// this is what it is known as destructuring the object
    const {courseInstructor: instructor} = course;

    console.log(instructor);


    //***********API*************
    // IN THE MOST SIMPLER LANGUAGE WHEN WE FORCE APNA KAAM KISI AUR KE SIR PE THEN THAT IS KNOWN AS API
     // just some values comes from the backened and how we write them earlier the values used to come in Xml structure but nowadays the come in the form of json

     {
        name: "Arushi",
        coursename: "js in hindi",
        price: "free"
     }
     //api also come in the form of arrays
     {
        {},
        {},
        {}
     }