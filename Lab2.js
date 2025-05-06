
const characters = [ { 
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
     }, 
    { 
    name: "Leia Organa", 
    height: 160,
    gender: "female", 
    mass: 56,
    eye_color: "blue",
     }, 
    { 
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
     },
     { 
    name: "Chewie",
    height: 222, 
    gender: "male",
    mass: 190,
    eye_color: "black",
     },
     {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2, 
    eye_color: "red",
     },
];
let name_more75 = characters.find(name=>{
    return name.mass>75
});
console.log(name_more75.name);

console.log("-------------------------------------------------------------------------");


let shorter180 = characters.find(char=>{
    return char.height<180
});

console.log(shorter180.eye_color);

console.log("-------------------------------------------------------------------------");

let toller150 = characters.filter(function(char) {
    return char.height > 150 && char.height < 210;
});
console.log(toller150);

console.log("-------------------------------------------------------------------------");

let females = characters.filter(function(char) {
    return char.gender == "female";
});
console.log(females);

console.log("-------------------------------------------------------------------------");

let eye_colors = characters.map(function(char) {
    return char.eye_color;
});
console.log(eye_colors);

console.log("-------------------------------------------------------------------------");

let masses = characters.map(function(char) {
    return char.mass;
});
console.log(masses);

console.log("-------------------------------------------------------------------------");

let sorted_names = characters.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
});
console.log(sorted_names);

console.log("-------------------------------------------------------------------------");

let sorted_height = characters.slice().sort(function(a, b) {
    return a.height - b.height;
});
console.log(sorted_height);

console.log("-------------------------------------------------------------------------");

let tall = characters.every(function(char) {
    return char.height > 100;
});
console.log(tall);

console.log("-------------------------------------------------------------------------");

let mass_200 = characters.every(function(char) {
    return char.mass < 200;
});
console.log(mass_200);

console.log("-------------------------------------------------------------------------");

let black_eyes = characters.some(function(char) {
    return char.eye_color == "black";
});
console.log(black_eyes);

console.log("-------------------------------------------------------------------------");

let has_177 = characters.some(function(char) {
    return char.height == 177;
});
console.log(has_177);

