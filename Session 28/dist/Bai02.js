"use strict";
function delayedCallback(callback, delay) {
    if (typeof delay !== "number" || delay < 0) {
        throw new Error("Delay phải là số nguyên không âm!");
    }
    setTimeout(callback, delay);
}
function sayHello() {
    console.log("Xin chào sau 2 giây!");
}
delayedCallback(sayHello, 2000);
