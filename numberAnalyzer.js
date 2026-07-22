let number = -12;
function checkSign(){
    if(number>0){
        console.log("Positive number");
    }else if(number<0){
        console.log("Negative number");
    }else{
        console.log("Number is Zero");
    }
}
function isEven(){
    if(number%2===0){
        console.log("Even number");

    }else{
        console.log("Odd number");
    }

}
function square(){
    return number*number;

}
function double(){
    return number*2;

}
checkSign(number);
isEven(number);
console.log(square(number));
console.log(double(number));

// for(var i =0; i<3; i++){
//     setTimeout(()=>console.log(i),0);
// }
// (function(){
//     const secret = "12345ABCD";
//     console.log(secret)
// })();

const CounterApp = (function(){
    let count = 0;
   return{
    increment: function(){
        count++;
        console.log(count);
    }
   };
})();
CounterApp.increment();
CounterApp.increment();
(function(){
    let db_password = "123fnf";
    console.log("Password initialized");
})();
console.log(db.password);
