
function sumOfValues(...args){
    console.log (args.reduce(numbers));
}

sumOfValues(4, 6, 2, 9, 6);

function numbers(curr, nextV){
    return curr + nextV
}