/**
 * 1. Takes two arrays representing digits of two numbers, converts them to
 * integers, and returns their sum.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two numbers
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(''));
  const num2 = Number(array2.join(''));
  return num1 + num2;
}

/**
 * 2. Checks whether a positive integer is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} true if value is a palindrome, false otherwise
 */
export function luckyNumber(value) {
  const str = String(value);
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

/**
 * 3. Validates user input and returns an appropriate error message string.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message or an empty string if valid
 */
export function errorMessage(input) {
  if (!input) {
    return 'Required field';
  }

  const numberValue = Number(input);

  if (Number.isNaN(numberValue) || numberValue === 0) {
    return 'Must be a number besides 0';
  }

  return '';
}
//two sum example
console.log('twoSum([1, 2, 3], [0, 7]) :', twoSum([1, 2, 3], [0, 7])); 
// Output: 130 (123 + 7)

console.log('twoSum([2, 4], [1, 5, 0]) :', twoSum([2, 4], [1, 5, 0])); 
// Output: 174 (24 + 150)


//lucky number
console.log('luckyNumber(1441) :', luckyNumber(1441)); 
// Output: true (reads same backwards)

console.log('luckyNumber(123)  :', luckyNumber(123));  
// Output: false


//error message
console.log('errorMessage("123") :', `"${errorMessage("123")}"`);       
// Output: "" (valid number)

console.log('errorMessage("") :', `"${errorMessage("")}"`);          
// Output: "Required field"

console.log('errorMessage(undefined) :', `"${errorMessage(undefined)}"`);   
// Output: "Required field"

console.log('errorMessage("abc") :', `"${errorMessage("abc")}"`);       
// Output: "Must be a number besides 0"

console.log('errorMessage("0") :', `"${errorMessage("0")}"`);         
// Output: "Must be a number besides 0"