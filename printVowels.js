// function pVowels(data){
//     let count = 0;
//     for(const char of data){
//        if(char==="a"||
//           char==="e"||
//           char==="i"||
//           char==="o"||
//           char==="u"){
//             count++;

//        }
            

       
//     }
//     console.log(count);
// }
// let count = 0; 
// const pVow = (data, count)=>{if (char==="a"||
//           char==="e"||
//           char==="i"||
//           char==="o"||
//           char==="u") {
//             count++

    
// };
// }
// let data = "Hello";
// pVowels(data);

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");
//   })
//   .then(() => {
//     console.log("Promise 2");
//   });

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 3");
// });


// (function(){
//    var count = 10;
//    console.log("file 1 count:",count);
// })(); 
// (function(){
//    var count = 30;
//    console.log("file2 count:",count);
// })();

const MyApp = (function(){
   let privateCounter = 0;

   return{
      increment:()=> privateCounter++,
      getCount:()=> privateCounter,
   }
})();
MyApp.increment();
MyApp.increment();
MyApp.increment();
console.log(MyApp.getCount());
