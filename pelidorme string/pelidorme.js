// okay so we have given a syring to check that if it is a pelidromw or not 
// what is pelidorm umm the words which are same wehn reading from back too 
// so we need ro first split the strig to a array and then reverse the array and then join the array and you are good to go 
const a = "madam"


function check(a){
    const b = a.split('').reverse().join('')
    console.log(b)
    if(b==a){
        console.log("strring is pelidrome")
    }else{
        console.log("string is not a pelidrome")
    }

}
check(a);




const c = "kanak";

function pelidrome(word){
const splt = word.split('').reverse().join('')  // it change the string into array 
console.log(splt)

if(splt==word){
    console.log(`${word } is a pelidrome word`)
}else{
    console.log(word , "is not a plidrome word")
}

}
pelidrome(c)


/// steps followed :: 
// first split the string into array by string.split(""),then now string is converted into array as each word of string get converted into the each item of the array and 
// now reverse the array by string.split().reverse()  /// now we have a array of reverse characters
// now join the array items to make  astring by string.split('').reverse().join(''), 
// finally make a check to know wether the string is equal to the new string ? if yes then print okay it is a peldrome 
