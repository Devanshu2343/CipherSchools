class Person{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
   
  
  let getDetails_NoAccess = function(){
    return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
    };
  
  
    this.getDetails_Acess = function(){
      return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
      };
    } 
  }
  
  let person1 = new  Person("Shantanu", "Shubham");
  
  console.log(person1.firstName);
  console.log(person1.getDetails_NoAccess());
  console.log(person1.getDetails_Access());

  // using function

//   function Person (firstName, lastName){
//       this.firstName = firstName;
//       this.lastName = lastName;
   
  
//   let getDetails_NoAccess = function(){
//     return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
//     };
  
  
//     this.getDetails_Acess = function(){
//       return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
//       };
//     } 
  
  
//   let person2 = new  Person("Shantanu", "Shubham");
  
//   console.log(person2.firstName);
//   console.log(person2.getDetails_NoAccess());
//   console.log(person2.getDetails_Access());
