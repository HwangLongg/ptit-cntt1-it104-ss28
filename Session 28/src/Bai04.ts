function displayNumbers(callback: (value: number) => void, delay: number): void {
    if (typeof delay !== "number" || delay <= 0) {
        throw new Error("Delay phải là số nguyên dương!");
    }

    let count: number = 1;

    setInterval(() => {
        callback(count);
        count++;
    }, delay);
}
function printNumber(value: number): void {
    console.log(`Số thứ tự: ${value}`);
}
displayNumbers(printNumber, 1000);
