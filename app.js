import { add } from "./calculator.js";
import { multiply } from "./calculator.js";
import {PI} from "./calculator.js";
console.log(PI);
console.log(add(2,3));
console.log(multiply(2,3));
// console.log(helper); // this is not exported hence error will cause
let scores = [40, 50, 60];

let result = scores.find(score => score > 100);

console.log(result);