//snippet 1

let a = 10;
let b = a;
// // const b = a; 
b = 20;
console.log("///snippet 1");
console.log(a); //10
console.log(b); //20


//snippet 2
const obj1  = {
    name : "ishan"
}
const obj2 = obj1;
obj2.name = "Rahul";

console.log("///snippet 2");
console.log(obj1.name); //Rahul
console.log(obj2.name); //Rahul

//snippet 3
console.log("///snippet 3");
console.log(c);//undefined
var c = 100;
console.log(c);// 100

//snippet 4
console.log("///snippet 4");
//console.log(d);
let d = 100;// cannot access d before initialization

//snippet 5
console.log("///snippet 5");
var x = 10;
function test(){
    console.log(x);// undefined
    var x = 20; 
    console.log(x);// 20
}
test();
console.log(x); // 10





