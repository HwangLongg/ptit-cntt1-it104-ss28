"use strict";
function displayNumbers(callback, delay) {
    if (typeof delay !== "number" || delay <= 0) {
        throw new Error("Delay phải là số nguyên dương!");
    }
    let count = 1;
    setInterval(() => {
        callback(count);
        count++;
    }, delay);
}
function printNumber(value) {
    console.log(`Số thứ tự: ${value}`);
}
displayNumbers(printNumber, 1000);
