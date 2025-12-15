
//https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript/69407f0201ea27c1bb088ad8

decodeMorse = function(morseCode){
    morseCode = morseCode.trim();

    let words = morseCode.split('   ');

    let decodedWords = words.map(word => {

        let letters = word.split(' ');
        return letters.map(letter => MORSE_CODE[letter]).join('');
    });


    return decodedWords.join(' ');
}

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {

    s = s.trim();

    let is_odd = s.length % 2 === 0;
    let centre_el_id = Math.floor(s.length / 2);

    if(is_odd){
        return s.slice(centre_el_id-1, centre_el_id+1)

    } else {
        return s[centre_el_id]
    }

    return '';
}

// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {

    for (let i = 0; i < arr.length; i++) {

        const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
        const rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);

        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;

}