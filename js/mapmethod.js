const student=[{
    id:1,
    name:"elisa",
    marks:80},
{
    id:2,
    name:"john",
    marks:90},
{
    id:3,
    name:"michael",
    marks:85}
];

student.map((item)=>{
    console.log("Student ID:",item.id);
    console.log("Student Name:",item.name);
    console.log("Student Marks:",item.marks);
    console.log("===========================");
    
}) ;