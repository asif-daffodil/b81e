const cityArr = ["Dhaka", "Rajshahi", "Khulna", "Rongpur"];

// map
cityArr.map((city, i)=>{
    console.log(i, city);
});

// array of objects
const cityObjArr = [
    {name: "Dhaka", population: 1000},
    {name: "Rajshahi", population: 500},
    {name: "Khulna", population: 200},
    {name: "Rongpur", population: 100}
];

// map
cityObjArr.map((city)=>{
    console.log(city.name, city.population);
});

// JSON person
const person = {
    name: "John",
    age: 30,
    city: "New York",
    phone: "0123456789",
    gender: "Male"
};

// get keys
const keys = Object.keys(person);
console.log(keys);

// destructuring


/* 
const city = person.city;
const gender = person.gender; 
*/

const {city, gender} = person;
console.log(gender);

// array of dhaka area
const areaArr = ["Mirpur", "Uttara", "Dhanmondi", "Mohammadpur"];

// array destructuring
const [firstArea, secondArea, dhan] = areaArr;

console.log(dhan);

const newArr = [...areaArr, "Azimpur", "Hazaribagh"];

console.log(newArr);






