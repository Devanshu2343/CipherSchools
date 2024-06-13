const myFun = () => {
    return new Promise ( (resolve , reject ) => {
        setTimeout(() => {
            console.log("This is inside promise");
            resolve();
        },2000);
    });
};

myFun()
 .then(()=>{
    console.log("Resolved");
 })
 .catch(()=>{
    console.error("Rejected");
 });