// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {

    let arr = String(value).split('');
    let length = arr.length;

    let result = 0;

    for(let i = 0; i < length; i++){
        result += Number(arr[i])**length;
    }

    return result === value;
}

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n){

    let arr = String(n).split('');
    arr.sort();
    arr.reverse();

    let result = arr.join('');

    return Number(result);
}

// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a,b) {

    let sum = a + b;

    return sum.toString(2);
}

// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function(busStops){

    let count = 0;

    for (let i = 0; i < busStops.length; i++) {
        count += busStops[i][0] - busStops[i][1];
    }

    return count
}