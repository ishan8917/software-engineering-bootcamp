function one(){
    console.log("One");
}

function two(){
    one();
    console.log("Two");
}

function three(){
    two();
    console.log("Three");
}

three();

function add(a,b){
    return a + b;
}
function multiply(a,b){
    return a * b;
}

function calculate(){
    const sum = add(10,20);
    const product = multiply(sum, 2);
    console.log(product);
}

calculate();

let name = "Ishan";

function outer(){
    let city = "Ahmedabad";

    function inner(){
        // console.log(name);
        console.log(city);
    }
    return inner();
}
const myFunction = outer();

myFunction();