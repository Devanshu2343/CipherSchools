// Use of let keyword 
//let has block level scope and it can be redeclared

let x = 10 

{
    let x = 20 ;
    console.log(x);
}

console.log(x);
