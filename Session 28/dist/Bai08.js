"use strict";
function myFilter(arr, searchValue, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], searchValue)) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isEqual(element, searchValue) {
    return element === searchValue;
}
const numbers = [1, 2, 2, 3, 4, 5, 6];
console.log(myFilter(numbers, 2, isEqual));
console.log(myFilter(numbers, 10, isEqual));
