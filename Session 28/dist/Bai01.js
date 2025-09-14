"use strict";
function calculate(a, b, callback) {
    let sum = a + b;
    callback(sum);
}
function printResult(result) {
    console.log("Kết quả phép cộng là:", result);
}
calculate(10, 15, printResult);
