// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
function add(a, b) {

    let iterationCount = a.length > b.length ? a.length : b.length;

    let resultArr = [];

    let carry = 0;

    for(let i = 0; i < iterationCount; i++){

        let digitA = a[a.length - 1 - i] ? Number(a[a.length - 1 - i]) : 0;
        let digitB = b[b.length - 1 - i] ? Number(b[b.length - 1 - i]) : 0;
        let sum = digitA + digitB + carry;

        let number = sum % 10;
        carry = Math.floor(sum / 10);

        resultArr.unshift(number);
    }

    if (carry > 0) {
        resultArr.unshift(carry);
    }

    return resultArr.join('');
}