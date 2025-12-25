// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript

function primeFactors(n) {
    let result = '';
    let p = 0;

    for (let i = 2; i * i <= n; i++) {

        while (n % i === 0) {
            n /= i;
            p++;
        }

        if (p > 0) {
            result += p > 1 ? `(${i}**${p})` : `(${i})`;
            p = 0;
        }
    }

    if (n > 1) {
        result += `(${n})`;
    }

    return result;
}
