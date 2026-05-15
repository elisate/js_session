
// ===========For Loop in JavaScript===========
// for(initialization; condition; increment) {
//     // code to be executed
// }
console.log("========INCREMENT");


for(let j=1;j<=5;j++){
console.log(j);   
}

console.log("========DECREMENT");

for(let i=5;i>=0;i--){
    console.log(i);
}
console.log("Array and Loops");


const student=[{
    name:"elisa",
    marks:80
},{
    name:"john",        
    marks:90    
},
{
    name:"michael",
    marks:85
}];

for(let i=0;i<student.length;i++){
    
    console.log("Student Name:",student[i].name);
    console.log("Student Marks:",student[i].marks);
    let sum=0;
     sum=sum+student[0].marks+student[1].marks+student[2].marks;
    const averageMarks=sum/student.length;
    console.log("Average Marks:",averageMarks);
    console.log("sum:",sum);
  
}
console.log("length of Array",student.length);

