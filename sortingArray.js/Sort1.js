const arr = [10, 1, 3, 30, 4, 20, 34, 53, 0, 2];

const sortarr = arr.sort();

console.log(sortarr); // it will not give us the desire result but why , well becscause it take the first no and start sort

//merhod

const sort1 = arr.sort((a, b) => a - b);

console.log(sort1); // it works well how ?

const second = Math.max(...arr);
console.log(second);

// const arr = [10, 1, 3, 30, 4, 20, 34, 53, 0, 2];

// fist the call back function takes two paramteres from array which is first and second value like ,  3-30 [9,-27]

const myarr = [10, 1, 12, 2, 21];

const newarr2 = myarr.sort((a, b) => a - b);

// a-b  = 9 means resukr is +ve means b will come at first   [1,1,2,2]  second 1-12 = -11 resur is negative means a will come forward

console.log(newarr2);

// if the result of a -b is -ve then a will come ealier , if result of a-b is +ve then result b will come earlier
