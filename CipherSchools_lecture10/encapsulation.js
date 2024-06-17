class Person{
    constructor(name, id){
      this.name = name;
      this.id = id;
   }
  
  addAddress(newAddress){
    this.address = newAddress;
    }
  
  getDetails(){
    console.log(`Name is: ${this.name} and the address is: ${this.address}`)
    }
  }
  
  let person1 = new  Person("Shantanu", 24);
  person1.addAddress("Kolkata");
  person1.getDetails();
