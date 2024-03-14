// find the largest number in array

const arr = [10, 20, 30, 50, 45, 78, 98, 56, 755, 24];

// steps::
// spread the whole array  elements by spread operator ...array
// now use math.max() function to find the maximun number of the arrays

const largestnum = Math.max(...arr); // 75 desire output :P

console.log(largestnum);
