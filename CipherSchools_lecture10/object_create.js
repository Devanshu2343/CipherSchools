
const coder = {
    isStudying : false,
    printIntroduction: function(){
      console.log(`My name is ${this.name} . Am I studying?: ${this.isStudying}`);
    },
  };
  
  const me = Object.create(coder);
  me.name = "Devanshu Singh" ;
  me.isStudying = true;
  me.printIntroduction();
