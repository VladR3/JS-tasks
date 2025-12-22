// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function(arr){
    let max = 0;
    let sum = 0;

    arr.forEach((el) => {
        sum += el;

        if(sum > 0){
            max = sum > max ? sum : max;
        }
        else {
            sum = 0;
        }
    });

    return max;
}

// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[0] - b[0]);

    let sum = 0;
    let [currentStart, currentEnd] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (start <= currentEnd) {
            currentEnd = Math.max(currentEnd, end);
        } else {
            sum += currentEnd - currentStart;
            currentStart = start;
            currentEnd = end;
        }
    }

    sum += currentEnd - currentStart;

    return sum;
}