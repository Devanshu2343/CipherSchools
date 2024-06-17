class Vehicle{
    constructor(name, maker, engine){
      this.name = name;
      this.maker = maker;
      this.engine = engine;
    }
  
  getDetails(){
    return `The name of the vehicle is ${this.name}`;
   }
  
  };
  
  let v1 = new Vehicle("Creta","Hyundai","2500cc");
  let v2 = new Vehicle("Q5","Audi","3000cc");
  
  console.log(v1.name);
  console.log(v2.maker);
  console.log(v1.getDetails());

// Alternate Method
// function Vehicle(name, maker, engine){
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
//   }
  
//   Vehicle.prototype.getDetails = function(){
//     return `The name of the vehicle is ${this.name}`;
//   };
  
//   let v1 = new Vehicle("Creta","Hyundai","2500cc");
//   let v2 = new Vehicle("Q5","Audi","3000cc");
  
//   console.log(v1.name);
//   console.log(v2.maker);
//   console.log(v1.getDetails());
