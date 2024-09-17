let booleans = [true, false, "true", false, true, false];
let countTruths = booleans.filter(Boolean).length;
console.log(countTruths); 
console.log(booleans.filter( value => value == true).length);