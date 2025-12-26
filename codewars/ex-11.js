// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

function getPINs(observed) {
    const rules = {
        '0': ['0', '8'],
        '1': ['1', '2', '4'],
        '2': ['2', '1', '3', '5'],
        '3': ['3', '2', '6'],
        '4': ['4', '1', '5', '7'],
        '5': ['5', '2', '4', '6', '8'],
        '6': ['6', '3', '5', '9'],
        '7': ['7', '4', '8'],
        '8': ['8', '5', '7', '9', '0'],
        '9': ['9', '6', '8']
    };

    let result = [''];

    for (const digit of observed) {
        const next = [];
        for (const prefix of result) {
            for (const d of rules[digit]) {
                next.push(prefix + d);
            }
        }
        result = next;
    }

    return result;
}
