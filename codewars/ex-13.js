// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
function moveZeros(arr) {
    const withoutZeros = arr.filter(el => !(el === 0 && typeof el === 'number'));
    const zeros = arr.filter(el => el === 0 &&  typeof el === 'number');

    return withoutZeros.concat(zeros)
}

// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
function firstNonRepeatingLetter(str) {
    const lower = str.toLowerCase();
    const counts = {};

    for (let i = 0; i < lower.length; i++) {
        const ch = lower[i];
        counts[ch] = (counts[ch] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (counts[lower[i]] === 1) {
            return str[i];
        }
    }

    return "";
}