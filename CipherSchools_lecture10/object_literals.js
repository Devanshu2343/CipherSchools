let person = {
    firstname : "Devanshu" ,
    lastName : "Singh" ,

    //method
    getFullName : function () {
        return `The name of the person is ${person.firstname} ${person.lastName}`
    },

    phoneNumber : {
        mobile : '12345' ,
        landline : '566789'
    }
};

console.log(person.getFullName());
console.log(person.phoneNumber.landline);
