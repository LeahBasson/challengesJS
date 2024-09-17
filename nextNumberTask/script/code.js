let numbers = [4, 6, 2, 9, 3];
let index = 0;

function nextNumber(){
    if (index < numbers.length){
        return numbers[index++];
    }
    else{
        return "No more numbers"
    }
}

console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());