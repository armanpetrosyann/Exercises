'use strict';


// let array = [5, 10, 33];
//
// let secondArray = [];
//
// for (let i = 0; i < array.length; i++) {
//     array[i] *= 2;
//     secondArray[i] = array[i];
// }
// alert(secondArray);

// let array = [];
//
// array[0] = 9;
// array[1] = "text";
// array[10] = "ok";
//
// alert(array[9]);
//
// alert(array.length);

// let array = [5, 8, 19, 340, 24, 58, 919, 82, 11, 33];
//
// let onlyOddNumber = [];
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//         onlyOddNumber.push(array[i]) ;
//     }
// }

// for (let i = 0; i < onlyOddNumber; i++) {
//     if (onlyOddNumber[i] === undefined) {
//         onlyOddNumber.shift();
//     }
// }

// alert(onlyOddNumber);

// let randArray = [1, 22, 32, 20, 57, 44, 11, 321, 120, 111, 91, 37];
//
// let onlyEvenNumbers = [];
//
// for (let i = 0; i < randArray.length; i++) {
//     if (randArray[i] % 2 === 0) {
//         onlyEvenNumbers.push(randArray[i]);
//     }
// }
// alert(onlyEvenNumbers);

// let sum = function (x, z) {
//     return x + z;
// };
//
// let result = sum(10, 20);
// alert(result);


// function FindEvenNumber(array, readyArray) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             readyArray.push(array[i]);
//         }
//     }
//     alert(readyArray);
// }
//
// let array = [1, 22, 32, 20, 11, 64, 33, 37, 79, 81, 121, 311];
//
// let newArray = [];
//
// FindEvenNumber(array, newArray);

// function sumAllElements(array) {

// let numberOne = 10;
// let numberTwo = "10";
//
// let changedNumberOne = numberOne.toString();
// let changedNumberTwo = Number(numberTwo);
//
// alert(typeof changedNumberOne);
// alert(typeof changedNumberTwo);

// function userAgeCheck() {
//     let isValid = false;
//
//     let askForAge = +prompt("How old are you?");
//
//     if (askForAge < 10) {
//         alert("hi");
//     } else if (askForAge >= 10 && askForAge < 18) {
//         alert("hello");
//     } else {
//         alert("greetings");
//     }
// }
//
// userAgeCheck();


// let enteredValue = null;
// let iteration = 0
//
// function sumAllElements() {
//
//     iteration++;
//
//     let askForNumber = prompt("Enter a number");
//
//     if (askForNumber === 'exit') {
//         alert(`Result of sum is ${enteredValue}`);
//         enteredValue = null;
//         return;
//     }
//
//     if (askForNumber === null && enteredValue === null) {
//         alert(`enter number`);
//         sumAllElements();
//     } else if (askForNumber === null && enteredValue !== null) {
//         alert(`you canceled program, Result of sum is ${enteredValue}`);
//     } else {
//         enteredValue += +askForNumber;
//         sumAllElements();
//     }
// }
//
// sumAllElements();

// function computeTriangleArea(base, height) {
//     return (base * height) / 2;
// }
//
// alert(computeTriangleArea(2,9));

// let array = [1, 2, 3, 4];
// let arrayTwo = [];
//
// function reverserArray(array, reversedArray) {
//     for (let i = 0; i < array.length; i++) {
//         reversedArray.push(array[i]);
//     }
//     let reversedArrayResult = reversedArray.reverse();
//     return reversedArrayResult;
// }
//
// alert(reverserArray(array, arrayTwo));

let array = [4, 3, 6, 10, 2];

function average(array) {
    let quantityElements = 0;
    let arrValue = 0;

    for (let i = 0; i < array.length; i++) {
        arrValue += array[i];
        quantityElements++;
    }
    let result = arrValue / quantityElements;
    return result;
}

alert(average(array));