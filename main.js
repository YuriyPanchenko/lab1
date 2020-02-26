const circle = require('./p1.js');
const permuteFunction = require('./p2.js');
const factorialFunction = require('./p3.js');
const NumberOfMostUsefullSymbolFunction = require('./p4.js');
const getNumberOfDaysInMonthFunction = require('./p5.js');
const quickSortFunction = require('./p6.js');

//test circle function
console.log(circle.splitStringToWords("dfsf d df     faalfl     ffd ssss"));

//test permute function
const word = 'yuriy'
console.log(Array.from(permuteFunction.permute(word.split('')))
  .map(perm => perm.join(''))
  .filter((el, idx, self) => (self.indexOf(el) === idx)))

//test factorial function
console.log(factorialFunction.factorial(5));


//test NumberOfMostUsefullSymbol function
NumberOfMostUsefullSymbolFunction.NumberOfMostUsefullSymbol([1,2,3,2,2,1,3]);

//test getNumberOfDaysInMonthFunction
console.log(getNumberOfDaysInMonthFunction.getNumberOfDaysInMonth(3, 1882));

//test quick sort
let items = [5,3,7,6,2,9];
console.log(quickSortFunction.quickSort(items, 0 ,items.length-1))


