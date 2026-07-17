console.log("Hello Wrold");
let a = 5; 
let b = 6;
let letter = "Zain";
console.log(a+b);
console.log(typeof a);
console.log(typeof letter);
let val1 = 33;
let val2 = 66;
console.log(val1*val2); 
let c = 44.5;
let d = 55.3;
let sub = d-c;
console.log(sub);
let e=20;
let f = 10;
console.log(e/f);
let original = {name:"Zain"};
let copy = original;
copy.name = "Arshad";
original.name = "Haseeb";
console.log(original.name);
console.log(copy.name);
function stepThree(){
    console.log("Three Called");

}
function stepTwo(){
    console.log("Two called");
    stepThree();

}
function stepOne(){
    console.log("One called");
    stepTwo();
}
stepOne();

