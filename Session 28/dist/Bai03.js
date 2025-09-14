"use strict";
function processArray(arr, callback) {
    arr.forEach((value, index) => {
        setTimeout(() => {
            callback(value, index);
        }, (index + 1) * 1000);
    });
}
function printElement(value, index) {
    console.log(`Phần tử thứ ${index + 1}: ${value}`);
}
processArray([1, 2, 3, 4, 5], printElement);
