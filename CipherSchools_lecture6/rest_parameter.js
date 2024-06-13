const addNos = (...args) =>{
    let sum =0 ;
    for ( let arg of args){
        sum += arg;
    }
    return sum ;
};

console.log(addNos(12,23,45,76,89,67));