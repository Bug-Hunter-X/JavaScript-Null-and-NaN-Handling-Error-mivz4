function foo(a, b) {
  // Check if either input is null
  if (a === null || b === null) {
    return 0; // Handle null values explicitly
  }
  //Check if either input is a Number
  if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; //Return NaN if inputs are not numbers
  }
  return a + b; //Standard addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo(5, 'a')); // Output: NaN