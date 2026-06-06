const marvel_heroes = ["thor","Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)
// the array in this one is containg an another array as its element

//console.log(marvel_heroes);
//console.log(marvel_heroes[3][2]);

//marvel_heroes.concat(dc_heroes)
//console.log(marvel_heroes);
//const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);

//spread operator is also used for doing the same thing

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.from("Arushi"))
//it will convert into array

console.log(Array.from({name: "arushi"})) // imp for upcoming syllabus

let game1 = 500
let game2 = 900
let game3=700
console.log(Array.of(game1 ,game2 ,game3));