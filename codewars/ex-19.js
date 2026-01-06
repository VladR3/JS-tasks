// https://www.codewars.com/kata/5426d7a2c2c7784365000783/train/javascript
function balancedParens(n) {
    const result = [];

    function built(current, open, close){

        if(current.length === 2*n){
            result.push(current);
            return;
        }

        if (open < n) {
            built(current + "(", open + 1, close)
        }

        if(close < open) {
            built(current + ")", open, close + 1);
        }
    }

    built("", 0, 0)

    return result;
}