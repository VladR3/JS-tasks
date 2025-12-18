// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {

    let arr = (s1 + s2).split('');

    arr.sort();

    let newArr = [];

    arr.forEach((char) => {
        if (!newArr.includes(char)) {
            newArr.push(char);
        }
    });

    return newArr.join('');
}


//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero(f) { return f ? f(0) : 0; }
function one(f)  { return f ? f(1) : 1; }
function two(f)  { return f ? f(2) : 2; }
function three(f){ return f ? f(3) : 3; }
function four(f) { return f ? f(4) : 4; }
function five(f) { return f ? f(5) : 5; }
function six(f)  { return f ? f(6) : 6; }
function seven(f){ return f ? f(7) : 7; }
function eight(f){ return f ? f(8) : 8; }
function nine(f) { return f ? f(9) : 9; }

function plus(b)       { return a => a + b; }
function minus(b)      { return a => a - b; }
function times(b)      { return a => a * b; }
function dividedBy(b)  { return a => Math.floor(a / b); }