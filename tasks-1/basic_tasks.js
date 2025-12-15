// Variables

let username = 'Vlad';
console.log(`My name is ${username}`);

let age = 22;
console.log(typeof(age));
console.log(typeof(String(age)));

let number = 10;
let result = number + '20';
console.log(result);
console.log(typeof(result));


// Functions

let a = 4;
let b = 5;
function Sum (a, b) {
    return a+b
}
console.log(Sum(a, b));

function upperCase ( str ) {
    return str.toUpperCase();
}

console.log(upperCase(username));

function squareArray(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] ** 2);
    }

    return result;
}
