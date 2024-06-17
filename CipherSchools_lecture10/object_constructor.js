function person(firstname,lastName){
    this.firstname= firstname;
    this.lastName= lastName;
}

let person1 = new person("Devanshu" , "Singh");
let person2 = new person("Rahul" , "Singh");

console.log(person1.firstname);
console.log(`${person2.firstname} ${person2.lastName}`);
