console.log('Arrays')



// Write a function that takes an array
// and an index and prints out that value

// const indexAndPrint = (arr, index) => {
//     console.log(arr[index])
// }

// const myArray = [1, 2, 8, 'bee', 'last', 'first'];

// indexAndPrint(myArray, 2);

// challenge 2
// Write a function that takes an array of something
// and tells you if the name 'Greg' is in that array

// const isGreg = (arr) => {

//     if (arr.includes('Greg')) {
//         return true;
//     } else {
//         return false;
//     };
// }

// const newArray = [1, 4, 9, 'Greg', 'fish', 'blue']

// console.log(isGreg(newArray));

// const findGreg = (arr) => {
// const doesIncludeGreg = arr.includes('Greg')
// if (doesIncludeGreg) {
//     return 'Greg found'
// } else [
//     return 'Greg not found'
// ]
// }

// console.log(findGreg([1, 2, 3, 'Greg']))

// Challenge #3
// 1. A palindrome is a word or sentence that's
// spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing.
// 2. Console true if the given string is a palindrome.
// Otherwise, console false.

// const isPal = (x) => {
//     if (x === x.includes(x)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const palin = 'kayak'
// console.log(isPal);

const isItAPalindrome = (str) => {
    const arrayFromString = str.split('')
    const reversedArray = arrayFromString.reverse()
    const opposite = reversedArray.join('')

    if (str == opposite) {
        return true
    } else {
        return false
    }
}

console.log(isItAPalindrome('kayak'));

// const opposite = str.split('').reverse('').join('')