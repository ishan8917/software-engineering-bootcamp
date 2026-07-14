//snippet 1

// let a = 10;
// let b = a;
// // // const b = a; 
// b = 20;
// console.log("///snippet 1");
// console.log(a); //10
// console.log(b); //20


//snippet 2
// const obj1  = {
//     name : "ishan"
// }
// const obj2 = obj1;
// obj2.name = "Rahul";

// console.log("///snippet 2");
// console.log(obj1.name); //Rahul
// console.log(obj2.name); //Rahul

//snippet 3
// console.log("///snippet 3");
// console.log(c);//undefined
// var c = 100;
// console.log(c);// 100

//snippet 4
// console.log("///snippet 4");
// //console.log(d);
// let d = 100;// cannot access d before initialization

//snippet 5
// console.log("///snippet 5");
// var x = 10;
// function test(){
//     console.log(x);// undefined
//     var x = 20; 
//     console.log(x);// 20
// }
// test();
// console.log(x); // 10



//snippet 6 (variables)
// console.log("///snippet 6 (variables)")
// const e = undefined;
// console.log(e);
// var e = 10;
//let e = 10;
// const e = 10;

//snippet 7 (scope)
// console.log("//snippet 7 (scope)");
// // {
// //     var f = 10;
// // }
// {
//     let f = 10;
// }
// {
//     const f = 10;
// }
// console.log(f);

//snippet 8 (function scope)
// console.log("//snippet 8 (function scope)");
// let g = 100;
// function test(){
//     let g = 10;
//     console.log(g);
// }
// test();
// console.log(g);

// snippet 9 (scope chain)
// console.log("// snippet 9 (scope chain)");
// let a = 1;

// function one(){
//     let b = 2;

//     function two(){
//         let c = 3;

//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     two();
// }
// one();

//snippet 10 (shadowing)
// console.log("//snippet 10 (shadowing)");
// let a = 10;
// function test(){
//     let a = 20;
//     console.log(a);
// }
// test();
// console.log(a);

//snippet 11
// var a = 10;

// function test(){
//     var a = 20;
//     console.log(a);
// }

// test();

// console.log(a);

//snippet 12 (primitive copy)
console.log("//snippet 12 (primitive copy)");
let a = 10;
let b = a;
b = 50;

console.log(a);
console.log(b);

//snippet 13 (reference copy)
const obj1 = {
    name : "Ishan"
};

const obj2 = obj1;
obj2