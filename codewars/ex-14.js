// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
function incrementString (strng) {
    let i = strng.length - 1;

    while( i >= 0 && strng[i] >= '0' && strng[i] <= '9') {
        i--;
    }

    const text = strng.slice(0, i + 1);
    const numberPart = strng.slice(i + 1);

    if(numberPart === "") {
        return strng + "1";
    }

    const increment = String(Number(numberPart) + 1);
    const padded = increment.padStart(numberPart.length, "0");

    return text + padded;
}