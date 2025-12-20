 // https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

 function solution(number) {
     let result = '';

     const thousands = Math.floor(number / 1000);
     const hundreds  = Math.floor((number % 1000) / 100);
     const tens      = Math.floor((number % 100) / 10);
     const ones      = number % 10;

     result += getRoman(thousands * 1000);
     result += getRoman(hundreds * 100);
     result += getRoman(tens * 10);
     result += getRoman(ones);

     return result;
 }

 function getRoman(num) {
     const map = [
         [1000, 'M'],
         [900, 'CM'],
         [500, 'D'],
         [400, 'CD'],
         [100, 'C'],
         [90, 'XC'],
         [50, 'L'],
         [40, 'XL'],
         [10, 'X'],
         [9, 'IX'],
         [5, 'V'],
         [4, 'IV'],
         [1, 'I']
     ];

     let result = '';

     for (const [value, symbol] of map) {
         while (num >= value) {
             result += symbol;
             num -= value;
         }
     }

     return result;
 }


 // https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

 function arrayDiff(a, b) {
     for (let i = a.length - 1; i >= 0; i--) {
         if (b.includes(a[i])) {
             a.splice(i, 1);
         }
     }
     return a;
 }