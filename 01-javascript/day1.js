// console.log(a);
// var a = 100;
// let a = 100;

// const arr = [1,2,3];
// arr.push(4);

// {
//     var a = 20;
// }

// console.log(arr);

// const person ={
//     name: "ishan"
// };

// person.name = "Virat";

// console.log(person.name);

// {
//     let x = 10;
// }

// console.log(x);


var name = "Ishan";
let age = 31;
var city = "Pune";
var isMarried = true;
const skills = ["Frontend Architect","FullStack Developer","Salesforce Developer"];
const person= {
    name: "ishan",
    age: 31,
    city:"Pune"
}


// console.log(name);
// console.log(age);
// console.log(skills);
// console.log(isMarried);
// console.log(person.city);


const employee = {
    name: "Ishan",
    age: 31,
    city: "Ahmedabad",
    skills: ["React","LWC", "Javascript"]
}
const salary = {
    ...employee,
    salary: 1200000,
    city: "Pune"
}
employee.skills.push("Typescript");
delete employee.age;



console.log(employee);
console.log(employee.name);
console.log(salary);
// console.log(updatedEmployee);



