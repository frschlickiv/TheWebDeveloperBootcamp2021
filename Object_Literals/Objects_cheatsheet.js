// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;


const comments = [
    {username: 'Tammy', 
     text: 'lolol',
     votes: 9,
      }, 
      {username: 'Fishboi', 
      text: 'glub glub',
      votes: 9584}
]

console.log(comments[1].username)