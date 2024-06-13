
//example 1
const q1 = ["Jan", "Feb" , "Mar"];
const q2 = ["Apr", "May" , "June"];
const q3 = ["July", "Aug" , "Sep"];
const q4 = ["Oct", "Nov" , "Dec"];

const year = [...q1,...q2,...q3,...q4];

console.log(year);

//example 2 
const myNum = [23,24,45,67,87,98];
let maxVal = Math.max(...myNum);
console.log(maxVal);