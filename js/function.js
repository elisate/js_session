// syntax for Function Declaration

// 1. first method for Function Declaration
function  add (){
    const a=10;
    const b=20;
    const c=30;
    let sum=0;
    sum=a+b;
    sum=a+b+c;
    console.log("=======Display of Data in function===========");
    
console.log("the sum of a and b is ",sum);
}
add();


// 2. second method for Function Declaration
console.log("research======================");

const addNumber=(a,b,c)=>a+b+c;
console.log("sum of 3 numbers:",addNumber(10,20,30));

