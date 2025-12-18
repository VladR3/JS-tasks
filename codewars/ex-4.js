// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(strarr, k) {

    let longest = "";

    for (let i = 0; i <= strarr.length - k; i++) {
        let currentStr = '';

        for (let j = 0; j < k; j++) {
            currentStr += strarr[i + j];
        }

        if (currentStr.length > longest.length) {
            longest = currentStr;
        }
    }

    return longest;
}