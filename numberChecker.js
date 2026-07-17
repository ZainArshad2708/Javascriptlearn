//print odd or even
let number = 27;
if(number%2==0){
    console.log("Even number");
}else{
    console.log("Odd number");
}
//print number is positive, megative or zero
let a =-8;
if(a>0){
    console.log("Positive number");

}else if(a===0){
    console.log("Number is Zero");
}else{
    console.log("Negative number");
}
number = -12;
if(number===0){
    console.log("number is Zero");
}else{
    if(number%2===0){
     if(number>0){
        console.log("Positive Even")
     }else{
        console.log("Negative Even");
     }
    }else{
     if(number>0){
        console.log("Positive Odd")
    }else{
        console.log("Negative Odd");
    }
}
}