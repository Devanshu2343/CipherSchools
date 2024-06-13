const person = {
    firstName : "John" ,
    lastName : "Doe",
    age : 30,
    eyeColor : "Blue",
};

let id = Symbol ("id");
person[id]=12343;

console.log(person);